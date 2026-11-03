import assert from 'node:assert/strict';
export async function checkSalvage(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
 document.getElementById('soloBtn').onclick();save.quests=[{k:'trs',n:5,p:0,r:225}];const item=SALVAGE.items[0],gold=save.gold,loot=save.loot;
 sub.position.copy(item.start).add(new THREE.Vector3(0,5,0));subVel.set(0,0,0);oceanSalvageScan(sub.position);const revealed=item.seen>performance.now(),started=oceanSalvageInteract();oceanSalvageTick(.5);const winch=SALVAGE.line.visible&&!colliders.includes(item.col);
 subVel.set(10,0,0);oceanSalvageTick(.1);const cancelled=SALVAGE.active===null&&colliders.includes(item.col)&&item.progress===0;
 subVel.set(0,0,0);oceanSalvageInteract();for(let i=0;i<40;i++)oceanSalvageTick(.1);const reward=save.gold-gold,completed=item.done&&item.root.parent===null&&!colliders.includes(item.col),persisted=JSON.parse(store.get(SAVE_KEY)).myst.includes(item.id);
 oceanSalvageInteract();oceanSalvageTick(.1);return {revealed,started,winch,cancelled,reward,completed,persisted,loot:save.loot-loot,once:save.gold===gold+reward,quest:save.quests[0].p===1,total:SALVAGE.items.length};
 })()`));
 assert.equal(r.reward,120);assert.equal(r.loot,1);assert.equal(r.total,30);for(const k of ['revealed','started','winch','cancelled','completed','persisted','once','quest'])assert.equal(r[k],true,k);return r;
}
