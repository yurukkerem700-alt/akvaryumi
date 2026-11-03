import assert from 'node:assert/strict';
export async function checkCavernClearance(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
  for(const m of DEEP_CAVES)if(m.seal&&m.seal.alive)destroyStruct(m.seal,true,new THREE.Vector3(m.x,m.path[0].y,m.z));for(const m of DEEP_CAVES)for(const gate of m.gates)gate.unlocked=true;deepTick(4,worldTime());
  let checks=0;const blocked=[];
  for(let ship=0;ship<SUBS.length;ship++){
   const sc=SUBS[ship].sc,rad=2.1*sc,length=(SD[ship].nose-SD[ship].tail)*sc*.28;
   for(const m of DEEP_CAVES)for(let i=1;i<m.path.length-3;i++)for(const sign of [0,-1,1]){
    const a=m.path[i-1],b=m.path[i],offset=sign*length,start=new THREE.Vector3(a.x+Math.cos(a.a)*offset,a.y,a.z+Math.sin(a.a)*offset),want=new THREE.Vector3(b.x+Math.cos(b.a)*offset,b.y,b.z+Math.sin(b.a)*offset),end=want.clone();
    resolveSolidMotion(start,end,sign===0?rad:rad*.8,null);checks++;const error=end.distanceTo(want);if(error>1&&blocked.length<12){const hit=solidSweep(start,want,sign===0?rad:rad*.8),col=hit&&hit.collider;blocked.push({solid:col?{r:col.r,x:col.x,y:col.y,z:col.z,kind:col.st&&col.st.kind,cave:col.cave,gate:col.gate}:null,ship:SUBS[ship].en,cave:m.id,ring:i,sign,error:Math.round(error*100)/100});}
   }
  }
  return {ships:SUBS.length,caves:DEEP_CAVES.length,checks,blocked};
 })()`));
 assert.deepEqual(r.blocked,[]);return r;
}
