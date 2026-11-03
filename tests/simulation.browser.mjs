import assert from 'node:assert/strict';
export async function checkSimulation(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
 document.getElementById('soloBtn').onclick();invuln=100;const stops=[sub.position.clone(),new THREE.Vector3(OCEAN_EXP.sites[8].x,OCEAN_EXP.sites[8].y+20,OCEAN_EXP.sites[8].z),new THREE.Vector3(DEEP_CAVES[7].path[23].x,DEEP_CAVES[7].path[23].y,DEEP_CAVES[7].path[23].z)];let frames=0;
 for(const p of stops){sub.position.copy(p);subVel.set(0,0,0);for(let i=0;i<20;i++){lastT=performance.now()-60;loop();frames++;if(![...sub.position.toArray(),...subVel.toArray(),hull,battery].every(Number.isFinite))throw Error('Non-finite simulation state');}}
 return {frames,alive:!dead,objects:renderer.info.render.calls,terrain:TERRAIN.tiles.some(t=>t.mesh.visible),bounded:Math.abs(sub.position.x)<HX&&Math.abs(sub.position.z)<HZ&&sub.position.y>DEEP_LIMIT};
 })()`));
 assert.equal(r.frames,60);assert.equal(r.alive,true);assert.equal(r.terrain,true);assert.equal(r.bounded,true);assert.ok(r.objects>0);return r;
}
