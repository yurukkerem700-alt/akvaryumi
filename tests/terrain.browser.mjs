import assert from 'node:assert/strict';
export async function checkTerrain(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
 const original=camera.position.clone();camera.position.set(0,0,0);updateTerrainTiles(1,true);
 const total=TERRAIN.tiles.reduce((n,t)=>n+t.mesh.geometry.index.count,0),visible=TERRAIN.tiles.filter(t=>t.mesh.visible).reduce((n,t)=>n+t.mesh.geometry.index.count,0);
 const shared=TERRAIN.tiles.every(t=>t.mesh.geometry.attributes.color===FLOORG.attributes.color&&t.mesh.geometry.attributes.position===FLOORG.attributes.position);
 let coverage=true;for(const site of OCEAN_EXP.sites){camera.position.set(site.x,site.y+15,site.z);updateTerrainTiles(1,true);if(!TERRAIN.tiles.some(t=>t.mesh.visible&&site.x>=t.box.min.x&&site.x<=t.box.max.x&&site.z>=t.box.min.z&&site.z<=t.box.max.z))coverage=false;}
 camera.position.copy(original);updateTerrainTiles(1,true);return {tiles:TERRAIN.tiles.length,total,source:FLOORG.index.count,visible,shared,coverage};
 })()`));
 assert.equal(r.total,r.source);assert.equal(r.shared,true);assert.equal(r.coverage,true);assert.ok(r.visible>0&&r.visible<r.total*.25);return r;
}
