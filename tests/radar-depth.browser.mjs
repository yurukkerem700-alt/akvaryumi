import assert from 'node:assert/strict';
export async function checkRadarDepth(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
 const c=creatures.find(c=>c.sp==='ray'),e=enemies.find(e=>e.type==='shark'),savedC={...c},savedE={...e},fishLife=creatures.map(c=>c.deadUntil),enemyDead=enemies.map(e=>e.dead),reveal=sonarReveal,arc=rc.arc,text=rc.fillText;
 let circles=0,labels=[];rc.arc=function(x,y,r,...args){if(r===6)circles++;return arc.call(this,x,y,r,...args);};rc.fillText=function(t,...args){labels.push(t);return text.call(this,t,...args);};
 try{
  const now=performance.now(),p=sub.position;creatures.forEach(c=>c.deadUntil=1e9);enemies.forEach(e=>e.dead=true);Object.assign(c,{wx:p.x+10,wy:p.y,wz:p.z,deadUntil:-1e9});sonarReveal={until:now+7000,x:p.x,y:p.y,z:p.z};drawRadar(now);const nearby=circles===1;
  circles=0;c.wy=p.y-300;drawRadar(now);const deepHidden=circles===0;
  circles=0;c.wy=p.y;c.deadUntil=worldTime()+100;drawRadar(now);const deadHidden=circles===0;
  Object.assign(e,{dead:false,x:p.x+20,y:p.y+20,z:p.z});labels=[];drawRadar(now);const verticalHint=labels.includes('↑');e.y=p.y-300;labels=[];drawRadar(now);const distantEnemyHidden=!labels.includes('↓');
  return {nearby,deepHidden,deadHidden,verticalHint,distantEnemyHidden};
 }finally{Object.assign(c,savedC);Object.assign(e,savedE);creatures.forEach((c,i)=>c.deadUntil=fishLife[i]);enemies.forEach((e,i)=>e.dead=enemyDead[i]);sonarReveal=reveal;rc.arc=arc;rc.fillText=text;}
 })()`));
 for(const [k,v] of Object.entries(r))assert.equal(v,true,k);return r;
}
