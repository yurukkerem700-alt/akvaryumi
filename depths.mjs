/* Deterministic world relief shared by rendering, navigation and combat floors.
   Coordinates follow the original biome map; WS scales horizontal distances. */
export const OCEAN_SITES = [
  {x:210,z:-90,tr:'Büyük Okyanus Yarığı',en:'Great Ocean Rift'},
  {x:-420,z:220,tr:'Abisal Çukur',en:'Abyssal Basin'},
  {x:430,z:0,tr:'Derin Balık Havzası',en:'Deep Nursery Basin'},
  {x:0,z:125,tr:'Kırık Sırt Geçidi',en:'Fractured Ridge Passage'},
  {x:-960,z:-190,tr:'Bazalt Sırtları',en:'Basalt Ridges',kind:'basalt',depth:170},
  {x:-740,z:180,tr:'Sıcak Baca Sahası',en:'Hydrothermal Field',kind:'vents',depth:240},
  {x:-800,z:-20,tr:'Batık Kaldera',en:'Drowned Caldera',kind:'caldera',depth:280},
  {x:700,z:-190,tr:'Kireçtaşı Labirenti',en:'Limestone Labyrinth',kind:'limestone',depth:125},
  {x:900,z:180,tr:'Heyelan Kanyonu',en:'Landslide Canyon',kind:'canyon',depth:250},
  {x:1010,z:0,tr:'Dış Kıta Sahanlığı',en:'Outer Continental Shelf',kind:'shelf',depth:105}
];
export function oceanRelief(x,z,ws=1){
  const X=x/(ws*2),Z=z/ws;
  const basin=(cx,cz,rx,rz,depth)=>-depth*Math.exp(-(((X-cx)/rx)**2+((Z-cz)/rz)**2));
  // Broad mouths and stepped flanks leave room to turn and fight in a submarine.
  const axis=Z+90+22*Math.sin((X-210)/55);
  const rift=-260*Math.exp(-((axis/28)**2)-((X-210)/125)**4);
  const channel=-125*Math.exp(-(((Z-125-18*Math.sin(X/65))/24)**2)-(X/220)**4);
  let outer=0;
  for(const site of OCEAN_SITES){if(!site.kind)continue;
    const dx=(X-site.x)/100,dz=(Z-site.z)/70,mask=Math.exp(-(dx*dx+dz*dz));
    let relief=-site.depth;
    if(site.kind==='basalt')relief+=28*Math.sin(dx*11+dz*3)**2;
    if(site.kind==='vents')relief+=22*Math.sin(dx*9)*Math.cos(dz*8);
    if(site.kind==='caldera')relief+=95*Math.exp(-(((Math.hypot(dx,dz)-.9)/.2)**2));
    if(site.kind==='limestone')relief+=35*Math.sin(dx*10+Math.sin(dz*6))**2;
    if(site.kind==='canyon')relief-=75*Math.exp(-(((dz+Math.sin(dx*3)*.2)/.22)**2));
    if(site.kind==='shelf')relief+=25*Math.sin(dz*4+dx*2);
    outer+=relief*mask;
  }
  return outer+rift+channel+basin(-420,220,62,48,370)+basin(430,0,85,72,220)
    +basin(-180,-90,60,45,130)+basin(80,100,38,35,90);
}
// Simplified mesopelagic attenuation: retain a small navigation floor.
export function deepLight(depth){return Math.max(.025,Math.exp(-Math.max(0,depth)/72));}
// Habitat-relative metres, deterministic for all peers; no per-frame random jumps.
export function nestMotion(species,index,t,distance,speed){
  const shy=Math.max(0,Math.min(1,(32-distance)/20))*(.35+Math.min(1,speed/10)*.65);
  const a=t*.13+index*2.399;
  if(species==='moray')return {x:15+shy*3+Math.sin(a)*.7,y:-8,z:Math.sin(a*.6)*2,yaw:Math.PI/2,hidden:shy};
  const r=species==='angler'?4:7;
  return {x:Math.sin(a)*r*(1-shy*.7),y:-3+Math.sin(a*.63)*2-shy*4,z:Math.cos(a*.8)*r,yaw:Math.atan2(Math.cos(a),-Math.sin(a*.8)),hidden:shy};
}
