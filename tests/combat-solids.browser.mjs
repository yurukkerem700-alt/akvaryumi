import assert from 'node:assert/strict';
export async function checkCombatSolids(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
  if(!running)document.getElementById('soloBtn').onclick();
  const out={profiles:SPECIES.every(s=>{const v=creatureVital({sp:s.id,size:1});return v.hp>0&&v.resistance>0&&v.damage>=0&&v.speed>0;})};
  const savedPos=sub.position.clone(),oldInv=invuln,oldHull=hull;sub.position.set(0,-4,0);invuln=0;
  const c=creatures.find(c=>c.sp==='hammerhead'&&!c.deep),bak={...c};Object.assign(c,{wx:0,wy:-4,wz:4,pos:new THREE.Vector3(0,-4,4),off:new THREE.Vector3(),deadUntil:-1e9,hp:undefined,reactUntil:0});
  const hp=creatureVital(c).hp;damageCreature(c.k,3.1,sub.position,true,false);out.largeSurvives=c.deadUntil<worldTime()&&c.hp<hp&&c.hp>hp*.9;
  const old=hull;creatureReaction(c,.1,worldTime());out.hammerAttack=hull<old;Object.assign(c,bak);
  const small=creatures.find(c=>c.sp==='clown'),smallBak={...small};Object.assign(small,{wx:10,wy:-4,wz:0,pos:new THREE.Vector3(10,-4,0),off:new THREE.Vector3(),hp:undefined,deadUntil:-1e9});damageCreature(small.k,.1,sub.position,true,false);creatureReaction(small,1,worldTime());out.flee=small.response==='flee'&&small.off.x>0;Object.assign(small,smallBak);
  const deep=DEEP_FISH[0].targets[0],deepHP=deep.hp;deep.hp=creatureVital(deep).hp;const prev=deep.hp;damageCreature(deep.k,5,sub.position,false,false);out.caveDamage=creatures[deep.k]===deep&&deep.hp<prev;deep.hp=deepHP;
  out.noLargeOneShot=['whaleshark','mola','narwhal','hammerhead','manta','swordfish','turtle','oarfish'].every(sp=>{const v=creatureVital({sp,size:.85});return v.hp>52/v.resistance;});
  const col=addCol(0,-4,10,1),start=new THREE.Vector3(0,-4,0),end=new THREE.Vector3(0,-4,20),vel=new THREE.Vector3(0,0,30);resolveSolidMotion(start,end,.6,vel);out.wallStops=end.z<8.5&&vel.z<.01;
  camera.position.set(0,-4,20);cameraSolids(start);out.cameraStops=camera.position.z<8.5;colliders.splice(colliders.indexOf(col),1);cgDirty=true;
  const ctx=signCv.getContext('2d'),text=[],oldText=ctx.fillText,ms=stats.ms;ctx.fillText=function(t,...args){text.push(t);return oldText.call(this,t,...args);};stats.ms=65000;drawSign();ctx.fillText=oldText;stats.ms=ms;out.boards=scoreBoards.length===2&&scoreBoards.every(b=>b.parent===scene)&&text.includes('YÖRÜKHAN GAMES')&&text.includes('1:05');
  const wall=structs.find(s=>s.alive&&s.o&&s.o.solidWall),o=wall.o,ca=Math.cos(o.ry),sa=Math.sin(o.ry),localX=o.sx*.4,wx=o.x+ca*localX,wz=o.z-sa*localX,wy=o.y+o.sy*.5;
  const a=new THREE.Vector3(wx+sa*6,wy,wz+ca*6),b=new THREE.Vector3(wx-sa*6,wy,wz-ca*6);out.wallEdge=!!solidSweep(a,b,.5);
  const was=document.body.classList.contains('hideInstruments');instrumentsButton.click();const hidden=document.body.classList.contains('hideInstruments')!==was;instrumentsButton.click();out.panelToggle=hidden&&document.body.classList.contains('hideInstruments')===was;
  sub.position.copy(savedPos);invuln=oldInv;hull=oldHull;return out;
 })()`));
 for(const [k,v] of Object.entries(r))assert.equal(v,true,k+JSON.stringify(r));return r;
}
