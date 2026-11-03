// One fresh browser context per suite: no real saves or cross-suite state.
import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createRequire} from 'node:module';
const root=path.resolve(fileURLToPath(new URL('../',import.meta.url))); 
const dependencyRoot=process.env.AKVARYUM_TEST_MODULES;
const req=createRequire(dependencyRoot?path.join(dependencyRoot,'package.json'):import.meta.url);
const {chromium}=req('playwright');
const threeRoot=path.resolve(path.dirname(req.resolve('three')),'..');
const mime={'.html':'text/html','.mjs':'text/javascript','.js':'text/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml'};
const server=http.createServer(async(request,response)=>{
 try{
  const url=new URL(request.url,'http://localhost');
  const relative=decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname);
  const filename=path.resolve(root,'.'+relative);
  if(!filename.startsWith(root+path.sep)&&filename!==path.join(root,'index.html')){response.writeHead(403);response.end();return;}
  const body=await readFile(filename);response.writeHead(200,{'content-type':mime[path.extname(filename)]||'application/octet-stream','cache-control':'no-store'});response.end(body);
 }catch{response.writeHead(404);response.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const url='http://127.0.0.1:'+server.address().port+'/?test=1';
let browser;
try{
 browser=await chromium.launch({headless:true,...(process.platform==='win32'?{channel:'msedge'}:{}),args:['--enable-unsafe-swiftshader']});
 const suites=process.argv.slice(2).length?process.argv.slice(2):['performance','interface','terrain','ocean-expedition','research','persistence','stations','cavern-clearance','salvage','radar-depth','pause','combat-solids','deep-flow','simulation'];
 for(const suite of suites){
  if(!/^[a-z-]+$/.test(suite))throw Error('Invalid suite name');
  const context=await browser.newContext({...(process.env.AKVARYUM_TEST_MOBILE==='1'?{viewport:{width:852,height:393},isMobile:true,hasTouch:true,deviceScaleFactor:1}:{viewport:{width:1280,height:720}}),serviceWorkers:'block'});
  const page=await context.newPage(),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
  try{
   await page.route('https://cdn.jsdelivr.net/npm/three@0.180.0/**',async route=>{
    const suffix=route.request().url().split('three@0.180.0/')[1];
    await route.fulfill({path:path.join(threeRoot,suffix),contentType:'text/javascript'});
   });
   await page.addInitScript(()=>{window.requestAnimationFrame=()=>0;try{localStorage.setItem('aqua-tut','1');}catch{}});
   await page.goto(url,{waitUntil:'load'});
   await page.waitForFunction(()=>window.__ev,null,{timeout:120000});
   const exports=await import(pathToFileURL(path.join(root,'tests',suite+'.browser.mjs')));
   const report=await Object.values(exports)[0](page);
   await page.evaluate(()=>window.__ev('renderer.render(scene,camera)'));
   if(errors.length)throw Error(errors.join('\n'));
   process.stdout.write(suite+' '+JSON.stringify(report)+'\n');
  }finally{await context.close();}
 }
}finally{
 if(browser)await browser.close();
 await new Promise(resolve=>server.close(resolve));
}
