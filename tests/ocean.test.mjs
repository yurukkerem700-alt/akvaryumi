import test from 'node:test';
import assert from 'node:assert/strict';
import {oceanCurrent,solarLight,pressureBar,headingDegrees,advectVelocity} from '../ocean.mjs';
test('water field is bounded and continuous over the entire playable volume',()=>{
 for(let x=-2000;x<=2000;x+=157)for(let z=-1000;z<=1000;z+=137)for(const t of [0,360,720,86400]){
  const a=oceanCurrent(x,z,t),b=oceanCurrent(x+.001,z,t+.001);
  assert.ok(Math.abs(a.x)<=.75&&Math.abs(a.z)<=.75);
  assert.ok(Math.hypot(a.x-b.x,a.z-b.z)<.001);
 }
});
test('water relaxation has the same outcome at 20, 60 and 120 Hz',()=>{
 const flow={x:.4,z:-.6},results=[];
 for(const fps of [20,60,120]){const v={x:5,z:2};for(let i=0;i<fps*4;i++)advectVelocity(v,flow,1/fps,1.3);results.push(v);}
 for(const v of results){assert.ok(Math.abs(v.x-results[0].x)<1e-10);assert.ok(Math.abs(v.z-results[0].z)<1e-10);}
});
test('sunlight vanishes at night and decays with depth',()=>{
 assert.equal(solarLight(1,0),0);assert.equal(solarLight(0,0),1);assert.ok(solarLight(0,80)<solarLight(0,40));assert.equal(solarLight(0,-5),1);
});
test('pressure and compass preserve physical reference points',()=>{
 assert.ok(Math.abs(pressureBar(10)-2.01875)<1e-10);assert.equal(pressureBar(-5),pressureBar(0));
 assert.equal(headingDegrees(-Math.PI/2),270);assert.equal(headingDegrees(Math.PI*4),0);
});
