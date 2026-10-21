// Integration checks for an ISOLATED Playwright context on localhost ?test=1.
// Disable requestAnimationFrame in that context before navigation to step physics deterministically.
// This uses the repository's existing localhost-only __ev hook; never run against a user's save.
import assert from 'node:assert/strict';
export async function checkDeepExpedition(page){
  await page.waitForFunction(()=>window.__ev);
  await page.evaluate(()=>window.__ev("if(!running)document.getElementById('soloBtn').onclick()"));
  const report=await page.evaluate(()=>window.__ev(`(()=>{
    const m=DEEP_CAVES[0],q=m.path[28],ordinary=floorH(q.x,q.z),bottom=floorQ(q.x,q.z,q.y);
    sub.position.set(q.x,q.y,q.z);subVel.set(0,0,0);updateSub(1/60);
    const stayed=sub.position.y<ordinary-70;
    for(const gate of m.gates){sub.position.set(gate.q.x,gate.q.y,gate.q.z);for(let i=0;i<240;i++)deepTick(1/60,worldTime());}
    const doors=m.gates.every(g=>g.open>.99);sub.position.set(m.cx,m.orbY,m.cz);
    const gold=save.gold;updateMyst(.1,worldTime());const reward=save.gold-gold;updateMyst(.1,worldTime());const once=save.gold===gold+reward;
    deepTick(.2,worldTime());
    const e=bossOf('magma'),sc=e.cfg.sc,head=new THREE.Vector3(e.x+Math.sin(e.yaw)*sc*4.5,e.y,e.z+Math.cos(e.yaw)*sc*4.5);
    const bone=relicMake('megalodon','shark',5,0,-20,0,0,true);relicHurt(bone,bone.cols[0],4);const broken=bone.nb>0;
    for(let i=0;i<900;i++)updateRelics(1);
    return {area:TW*TD/(1120*640*(BIGW?4:1)),descent:m.path[0].y-m.path.at(-1).y,bottom,ordinary,stayed,doors,reward,once,chest:m.deepLid.rotation.x<0,fish:DEEP_FISH.length,headHit:enemyBodyHit(e,head,1),networkY:v3([0,-230,0]).y,broken,cleaned:!relics.includes(bone)&&!colliders.some(c=>c.relic===bone)};
  })()`));
  assert.ok(Math.abs(report.area-4)<1e-10);
  assert.ok(report.descent>140&&report.bottom<report.ordinary-100);
  for(const key of ['stayed','doors','once','chest','headHit','broken','cleaned'])assert.equal(report[key],true,key);
  assert.ok(report.reward>=1200&&report.fish>=12);
  assert.equal(report.networkY,-230);
  return report;
}
