import {test} from 'node:test';
import assert from 'node:assert/strict';
import {surveyStep,safeResume} from '../expeditions.mjs';
test('sampling requires a chart, sonar, slow movement and proximity',()=>{
 const ok={charted:true,scanned:true,distance:20,speed:2,dt:.1};
 assert.ok(surveyStep(3,ok)>3);
 for(const bad of [{charted:false},{scanned:false},{distance:80},{speed:8},{alive:false}])assert.ok(surveyStep(3,{...ok,...bad})<3);
 assert.equal(surveyStep(7.99,ok),8);assert.ok(surveyStep(0,{...ok,dt:100})<=.25);
});
test('resume data rejects invalid positions and keeps a valid bookmark',()=>{
 const bounds={hx:100,hz:100,surface:36,limit:-820};
 const good={version:1,p:[20,-300,30],yaw:1,target:9};
 assert.deepEqual(safeResume(good,bounds),good);
 for(const p of [[NaN,0,0],[0,Infinity,0],[100,0,0],[0,-900,0],[0,0,-100]])assert.equal(safeResume({...good,p},bounds),null);
 assert.equal(safeResume(null,bounds),null);
 assert.equal(safeResume({...good,target:100},bounds).target,-1);
});
