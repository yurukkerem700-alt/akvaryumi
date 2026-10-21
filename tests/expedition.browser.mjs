import assert from 'node:assert/strict';
// Isolated localhost ?test=1 context, animation frames disabled before navigation.
export async function checkExpedition(page){
  const result=await page.evaluate(()=>window.__ev(`(()=>{
    if(!running)document.getElementById('soloBtn').onclick();
    const a={width:TW/(1120*WS),depth:TD/(640*WS)};
    toggleAnchor();const park=sub.position.clone();keys.w=true;updateSub(.05);keys.w=false;a.anchored=sub.position.distanceTo(park)<.001;
    toggleDive();a.diving=DIVE.on;keys.w=true;for(let i=0;i<120;i++)updateSub(1/60);keys.w=false;a.swam=sub.position.distanceTo(park)>2;
    updateCamera(.05);updateAim();for(const w of [1,2,3]){DIVE.weapon=w;DIVE.cd=0;a['weapon'+w]=diverAttack();}
    invuln=0;hurt(200,'haz');a.dying=DIVE.returnT>0;for(let i=0;i<200;i++)updateSub(1/60);a.respawn=!DIVE.on&&sub.position.distanceTo(park)<.001;
    toggleAnchor();a.unanchored=!DIVE.anchor;
    gunOver=false;gunHeat=0;sub.position.set(0,-4,0);for(let i=0;i<100;i++)fireGun();a.noHeat=!gunOver&&gunHeat===0;a.fast=GUN_CD<.04;
    const f=flora.find(f=>f.soft&&f.alive&&f.o);camera.position.set(f.x,f.y+5,f.z+5);const before=cuts.length;blastPlants(new THREE.Vector3(f.x,f.y,f.z),8);a.plants=!f.alive&&cuts.length>before;
    const e=bossOf('magma'),other=bossOf('frost');for(const b of [e,other]){b.dead=false;b.stun=0;b.st=0;b.cd=0;}e.x=0;e.y=-4;e.z=100;other.x=0;other.y=-4;other.z=130;e.scanCd=0;e.huntCd=0;const hp=other.hp;
    a.rival=bossHunt(e,null,1e9,.02)&&other.hp<hp;
    e.prey=null;e.scanCd=0;e.huntCd=0;other.x=1000;const c=creatures.find(c=>c.deadUntil<=worldTime()&&hitR(c)<e.r*.7);c.wx=0;c.wy=-4;c.wz=101;e.scanCd=1;e.prey={fish:c,index:creatures.indexOf(c)};const prev=c.hp??creatureVital(c).hp;bossHunt(e,null,1e9,.02);a.hunting=c.deadUntil>worldTime()||c.hp<prev;
    const away=e.x;e.st=0;e.wp=null;wander(e,8,1);a.roaming=Math.abs(e.x-away)>0;
    return a;
  })()`));
  assert.equal(result.width,2);assert.equal(result.depth,1);
  for(const [key,value] of Object.entries(result))if(!['width','depth'].includes(key))assert.equal(value,true,key+JSON.stringify(result));
  return result;
}
