import assert from 'node:assert/strict';
export async function checkStations(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
 if(!running)document.getElementById('soloBtn').onclick();const site=OCEAN_EXP.sites[9],old=sub.position.clone(),values={hull,battery,torpAmmo};
 sub.position.copy(site.station.position).add(new THREE.Vector3(0,8,0));subVel.set(0,0,0);site.surveyed=true;site.serviceAt=-Infinity;hull=HULL_MAX*.3;battery=10;torpAmmo=0;
 const service=oceanStationService(),repaired=hull>HULL_MAX*.3,charged=battery===70,ammo=torpAmmo===Math.min(2,TORP_MAX),after=hull;
 oceanStationService();const cooldown=hull===after;
 site.serviceAt=-Infinity;const e=enemies.find(e=>e.pool==='ocean'),bak={dead:e.dead,x:e.x,y:e.y,z:e.z};Object.assign(e,{dead:false,x:sub.position.x,y:sub.position.y,z:sub.position.z+10});hull=HULL_MAX*.3;oceanStationService();const threatBlocked=hull===HULL_MAX*.3;Object.assign(e,bak);
 hull=values.hull;battery=values.battery;torpAmmo=values.torpAmmo;sub.position.copy(old);return {service,repaired,charged,ammo,cooldown,threatBlocked,stations:OCEAN_EXP.sites.every(s=>s.station&&s.station.parent===scene)};
 })()`));
 for(const [k,v] of Object.entries(r))assert.equal(v,true,k);return r;
}
