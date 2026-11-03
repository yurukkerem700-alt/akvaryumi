import assert from 'node:assert/strict';
export async function checkInterface(page){
 assert.equal(await page.locator('#expeditionJournal').isVisible(),false);
 await page.evaluate(()=>window.__ev("document.getElementById('soloBtn').onclick();oceanExpeditionTick(.1,worldTime())"));
 await page.locator('#oceanDestination').focus();await page.keyboard.press('w');
 assert.equal(await page.evaluate(()=>window.__ev('!!keys.w')),false);
 await page.locator('#openExpeditionJournal').click();
 const journal=await page.locator('#expeditionJournal .card').boundingBox(),close=await page.locator('#closeExpeditionJournal').boundingBox();
 assert.ok(journal&&journal.y>=0&&journal.y+journal.height<=page.viewportSize().height+2);
 assert.ok(close&&close.y>=0&&close.y+close.height<=page.viewportSize().height);
 assert.equal(await page.locator('[data-destination]').count(),10);
 if(await page.evaluate(()=>window.__ev('isTouch')))await page.locator('#closeExpeditionJournal').click();else await page.keyboard.press('Escape');assert.equal(await page.locator('#expeditionJournal').isVisible(),false);
 if(await page.locator('#langBtn').isVisible())await page.locator('#langBtn').click();else{await page.locator('#touch [data-t=more]').click();await page.locator('#touch [data-t=cfg]').click();await page.locator('#cfgC button[data-k=lang][data-v=en]').click();await page.locator('#cfgX').click();}
 const language=await page.evaluate(()=>window.__ev("oceanDestination.options[1].textContent===tl(OCEAN_SITES[0].tr,OCEAN_SITES[0].en)"));assert.equal(language,true);
 return {viewport:page.viewportSize(),inputFocus:true,journalFits:true,closeVisible:true,closeWorks:true,language};
}
