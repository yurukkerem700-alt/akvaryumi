/* Shared, deterministic ocean field. Units: metres, seconds, m/s.
   Deliberately bounded for the aquarium scale; this is not a CFD simulation. */
export function oceanCurrent(x,z,t,out={x:0,z:0}) {
  out.x=.55*Math.sin(t*.021+x*.0042+z*.0031)+.2*Math.sin(t*.057-z*.011);
  out.z=.55*Math.cos(t*.017-x*.0033+z*.0047)+.2*Math.cos(t*.049+x*.009);
  return out;
}
export const CURRENT_GLSL=`vec2 oceanFlow(vec2 p,float t){return vec2(.55*sin(t*.021+p.x*.0042+p.y*.0031)+.2*sin(t*.057-p.y*.011),.55*cos(t*.017-p.x*.0033+p.y*.0047)+.2*cos(t*.049+p.x*.009));}`;
export function solarLight(night,depth){
  return Math.max(0,1-night)*Math.exp(-Math.max(0,depth)/46);
}
export function headingDegrees(yaw){return ((yaw*180/Math.PI)%360+360)%360;}
export function pressureBar(depth){return 1.01325+Math.max(0,depth)*.10055;}
/* Exact relaxation toward the local water velocity, independent of frame rate. */
export function advectVelocity(v,flow,dt,response){
  const k=1-Math.exp(-response*Math.max(0,dt));
  v.x+=(flow.x-v.x)*k;v.z+=(flow.z-v.z)*k;return v;
}
