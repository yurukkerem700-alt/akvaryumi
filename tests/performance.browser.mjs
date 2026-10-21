import assert from 'node:assert/strict';
export async function checkPerformanceSafety(page){
 const report=await page.evaluate(()=>window.__ev(`(()=>{
  const wt=worldTime();updateCreatures(wt,.016,[sub.position]);frameN++;fishGridBuild();let checked=0;
  for(let i=0;i<creatures.length;i+=Math.max(1,Math.floor(creatures.length/120))){const c=creatures[i];if(c.deadUntil>wt||c.wx>1e5)continue;const ids=nearCreatureIds(c.wx+hitR(c)*.5,c.wz,1);if(!ids.includes(i))throw Error('Missing creature '+i);checked++;}
  const eel=bossOf('magma'),head=new THREE.Vector3(eel.x+Math.sin(eel.yaw)*eel.cfg.sc*4.5,eel.y,eel.z+Math.cos(eel.yaw)*eel.cfg.sc*4.5);const headHit=enemyBodyHit(eel,head,1);
  const near=enemies.find(e=>!e.dead);near.x=sub.position.x;near.y=sub.position.y;near.z=sub.position.z;updateEnemyView(.016);const nearVisible=near.mesh.visible;
  near.x=HX-100;near.z=HZ-100;updateEnemyView(.016);const farHidden=!near.mesh.visible;
  const old=prCur;prCur=PR_MAX;govN=0;govAcc=0;for(let i=0;i<12;i++)govern(.2);const severeRecovers=prCur<PR_MAX;prCur=old;renderer.setPixelRatio(old);
  return {checked,headHit,nearVisible,farHidden,severeRecovers};
 })()`));
 assert.ok(report.checked>30);
 for(const k of ['headHit','nearVisible','farHidden','severeRecovers'])assert.equal(report[k],true,k);
 return report;
}
