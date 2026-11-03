import assert from 'node:assert/strict';
export async function checkPause(page){
 const start=await page.evaluate(()=>window.__ev(`(()=>{document.getElementById('soloBtn').onclick();toggleMap(true);const p=sub.position.clone();keys.w=true;loop();return {t:worldTime(),p:r3(p),paused:WORLD_CLOCK.start!==null};})()`));
 await page.waitForTimeout(120);
 const result=await page.evaluate(()=>window.__ev(`(()=>{loop();const t=worldTime(),p=r3(sub.position);net.mode='host';const onlineContinues=!shouldPauseExpedition();net.mode='solo';toggleMap(false);setWorldPaused(false);return {t,p,onlineContinues,resumed:WORLD_CLOCK.start===null};})()`));
 assert.equal(start.paused,true);assert.ok(Math.abs(result.t-start.t)<.01);assert.deepEqual(result.p,start.p);assert.equal(result.onlineContinues,true);assert.equal(result.resumed,true);return {frozenClock:true,frozenPosition:true,onlineContinues:result.onlineContinues,resumed:result.resumed};
}
