precision highp float;

uniform sampler2D tMap;

uniform vec2 uResolution;
uniform float uStrength;

varying vec2 vUv;

void main() {
  vec3 color;

  color.r = texture2D(tMap, vec2(vUv.x + uStrength, vUv.y)).r;
  color.g = texture2D(tMap, vUv).g;
  color.b = texture2D(tMap, vec2(vUv.x - uStrength, vUv.y)).b;

  gl_FragColor = vec4(color, 1.0);
}
