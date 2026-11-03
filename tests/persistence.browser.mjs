import assert from 'node:assert/strict';
import {checkResearch} from './research.browser.mjs';
export async function checkPersistence(page){
 await checkResearch(page);
 const saved=await page.evaluate(()=>window.__ev(`(()=>{const s=OCEAN_EXP.sites[0];sub.position.set(s.x,s.y+12,s.z);camYaw=1.25;OCEAN_EXP.target=2;saveOceanResume();return {p:r3(sub.position),gold:save.gold};})()`));
 await page.reload({waitUntil:'load'});
 await page.waitForFunction(()=>window.__ev,null,{timeout:120000});
 const r=await page.evaluate(()=>window.__ev(`(()=>{
 const s=OCEAN_EXP.sites[0],r=readOceanResume(),available=resumeExpedition.style.display!=='none';
 resumeExpedition.onclick();const restored=sub.position.distanceTo(new THREE.Vector3(...r.p))<.1&&Math.abs(camYaw-1.25)<.001&&OCEAN_EXP.target===2;
 const gold=save.gold;oceanExpeditionTick(.1,worldTime());
 return {available,restored,charted:s.visited,scanned:s.scanned,surveyed:s.surveyed,noDuplicateReward:save.gold===gold,gold};
 })()`));
 assert.equal(r.gold,saved.gold);for(const [k,v] of Object.entries(r))if(k!=='gold')assert.equal(v,true,k);return r;
}
