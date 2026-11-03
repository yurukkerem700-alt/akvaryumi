import assert from 'node:assert/strict';
import {test} from 'node:test';
import {oceanRelief,OCEAN_SITES,nestMotion,deepLight} from '../depths.mjs';
test('deep destinations remain reachable at both device scales',()=>{
  for(const ws of [Math.SQRT2,2*Math.SQRT2])for(const s of OCEAN_SITES){
    const y=oceanRelief(s.x*ws*2,s.z*ws,ws);
    assert.ok(y<-100&&y>-550,s.en);
    assert.equal(y,oceanRelief(s.x*2,s.z));
  }
});
test('light decreases with depth without removing navigation light',()=>{
  assert.equal(deepLight(0),1);
  assert.ok(deepLight(200)<.07);
  assert.ok(deepLight(500)>=.025);
});
test('sheltered species retreat under a nearby noisy vessel',()=>{
  const calm=nestMotion('moray',0,0,100,0),alarm=nestMotion('moray',0,0,5,15);
  assert.ok(alarm.x>calm.x&&alarm.hidden>calm.hidden);
  for(const sp of ['moray','nautilus','angler'])for(let t=0;t<200;t+=.5){
    const p=nestMotion(sp,2,t,15,5),q=nestMotion(sp,2,t+.001,15,5);
    assert.ok(Math.hypot(q.x-p.x,q.y-p.y,q.z-p.z)<.01);
    assert.ok(Math.abs(p.x)<20&&Math.abs(p.z)<10);
  }
});
test('relief is continuous across navigable slopes',()=>{
  for(let x=-2240;x<2240;x+=7)for(let z=-300;z<300;z+=7){
    const y=oceanRelief(x,z);
    assert.ok(Number.isFinite(y));
    assert.ok(Math.abs(y-oceanRelief(x+.1,z+.1))<3);
  }
});
