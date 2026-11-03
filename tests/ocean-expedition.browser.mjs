import assert from 'node:assert/strict';
export async function checkOceanExpedition(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
  if(!running)document.getElementById('soloBtn').onclick();
  const old=sub.position.clone(),mode=MS.mode,gold=save.gold;
  const site=OCEAN_EXP.sites[0];sub.position.set(site.x,site.y+12,site.z);oceanExpeditionTick(.1,worldTime());
  const paid=save.gold-gold;oceanExpeditionTick(.1,worldTime());
  const result={reward:paid,once:save.gold===gold+paid,active:site.slots.every(e=>!e.dead),caves:DEEP_CAVES.length,nests:DEEP_FISH.every(g=>!!g.nest),slots:enemies.filter(e=>e.pool==='ocean').length};
  const guard=enemies.find(e=>e.oceanCave),q=guard.oceanCave.path[26];activateSlot(guard,q.x,q.y,q.z);sub.position.set(q.x,q.y,q.z);
  for(let i=0;i<600;i++)oceanPatrolAI(guard,1/60);
  result.guardContained=guard.oceanCave.path.some(p=>Math.hypot(p.x-guard.x,p.y-guard.y,p.z-guard.z)<p.R*.8);
  MS.mode=Object.keys(MODES).find(k=>MODES[k].match);oceanExpeditionTick(.1,worldTime());result.matchClean=enemies.filter(e=>e.pool==='ocean').every(e=>e.dead);MS.mode=mode;
  result.floors=DEEP_CAVES.every(m=>m.path.every(p=>Number.isFinite(floorQ(p.x,p.z,p.y))&&p.y>DEEP_LIMIT+30));
  result.width=TW/WS;result.regions=OCEAN_EXP.sites.length;result.bounds=DEEP_CAVES.every(m=>m.path.every(q=>Math.abs(q.x)+q.R<HX&&Math.abs(q.z)+q.R<HZ));drawMap();OCEAN_EXP.target=9;oceanExpeditionTick(.5,worldTime());result.destination=OCEAN_EXP.nearest===OCEAN_EXP.sites[9];OCEAN_EXP.target=-1;sub.position.copy(old);return result;
 })()`));
 assert.equal(r.reward,240);for(const k of ['once','active','nests','guardContained','matchClean','floors','bounds','destination'])assert.equal(r[k],true,k);
 assert.equal(r.width,4480);assert.equal(r.regions,10);assert.equal(r.caves,14);assert.equal(r.slots,34);return r;
}
