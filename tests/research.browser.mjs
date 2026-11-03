import assert from 'node:assert/strict';
export async function checkResearch(page){
 const r=await page.evaluate(()=>window.__ev(`(()=>{
 if(!running)document.getElementById('soloBtn').onclick();
 const site=OCEAN_EXP.sites[0],old=sub.position.clone();sub.position.set(site.x,site.y+12,site.z);subVel.set(0,0,0);oceanExpeditionTick(.1,worldTime());oceanSurveyPulse(sub.position);const gold=save.gold;
 for(let i=0;i<100;i++)oceanExpeditionTick(.1,worldTime());
 const reward=save.gold-gold;oceanExpeditionTick(.1,worldTime());
 saveOceanResume();const resume=readOceanResume(),stored=JSON.parse(store.get(SAVE_KEY));
 const out={scanned:site.scanned,surveyed:site.surveyed,reward,once:save.gold===gold+reward,persisted:stored.myst.includes('ocean-survey-0'),resume:resume&&Math.abs(resume.p[0]-site.x)<1};
 const q=DEEP_CAVES[0].path[24];sub.position.set(q.x,q.y,q.z);OCEAN_EXP.exitMode=true;oceanNavigation();out.exitRoute=OCEAN_EXP.cave&&OCEAN_EXP.cave.m===DEEP_CAVES[0]&&oceanExit.style.display!=="none";OCEAN_EXP.exitMode=false;renderExpeditionJournal();out.journal=$('expeditionJournalBody').querySelectorAll('[data-destination]').length===10;toggleMap(true);const dest=OCEAN_EXP.sites[7],rect=$('mapC').getBoundingClientRect();out.mapChoice=rect.width>0&&oceanMapPick({target:$('mapC'),clientX:rect.left+(40+(dest.x+HX)*1320/TW)/1400*rect.width,clientY:rect.top+(40+(dest.z+HZ)*740/TD)/820*rect.height});toggleMap(false);sub.position.copy(old);return out;
 })()`));
 assert.equal(r.reward,300);for(const k of ['scanned','surveyed','once','persisted','resume','exitRoute','journal','mapChoice'])assert.equal(r[k],true,k);return r;
}
