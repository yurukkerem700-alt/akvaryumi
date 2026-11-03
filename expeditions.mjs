export function surveyStep(progress,{charted,scanned,distance,speed,alive=true,dt}){
  if(!alive||!charted||!scanned||distance>60||speed>3)return Math.max(0,progress-Math.max(0,dt)*.6);
  return Math.min(8,progress+Math.max(0,Math.min(dt,.25)));
}
export function safeResume(value,{hx,hz,surface,limit}){
  if(!value||value.version!==1||!Array.isArray(value.p)||value.p.length!==3||!value.p.every(Number.isFinite))return null;
  const [x,y,z]=value.p;
  if(Math.abs(x)>hx-12||Math.abs(z)>hz-12||y<limit+12||y>surface+2)return null;
  return {version:1,p:[x,y,z],yaw:Number.isFinite(value.yaw)?value.yaw:0,target:Number.isInteger(value.target)&&value.target>=-1&&value.target<10?value.target:-1};
}
