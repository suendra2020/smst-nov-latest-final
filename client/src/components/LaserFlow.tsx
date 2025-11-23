import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LaserFlow.css';

const VERT = `
precision highp float;
attribute vec3 position;
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const FRAG = `
#ifdef GL_ES
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
precision mediump int;

uniform float iTime;
uniform vec3 iResolution;
uniform vec4 iMouse;
uniform float uWispDensity;
uniform float uTiltScale;
uniform float uFlowTime;
uniform float uFogTime;
uniform float uBeamXFrac;
uniform float uBeamYFrac;
uniform float uFlowSpeed;
uniform float uFlowFactor;
uniform float uFogIntensity;
uniform float uFogScale;
uniform float uFogFallSpeed;
uniform float uMouseTiltStrength;
uniform float uDecay;
uniform float uFalloffStart;
uniform vec3 uColor;

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

// 2D Noise based on value noise
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 0..1 space
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic
    vec2 u = f*f*(3.0-2.0*f);
    // Quintic
    // vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b)* u.x * u.y;
}

// 3D Noise
float noise3d(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float n = i.x + i.y * 57.0 + 113.0 * i.z;
    
    float res = mix(mix(mix(random(n + 0.0), random(n + 1.0), f.x),
                        mix(random(n + 57.0), random(n + 58.0), f.x), f.y),
                    mix(mix(random(n + 113.0), random(n + 114.0), f.x),
                        mix(random(n + 170.0), random(n + 171.0), f.x), f.y), f.z);
    return res;
}

// 3D FBM
float fbm3d(vec3 p) {
    float f = 0.0;
    f += 0.5000 * noise3d(p); p *= 2.02;
    f += 0.2500 * noise3d(p); p *= 2.03;
    f += 0.1250 * noise3d(p); p *= 2.01;
    f += 0.0625 * noise3d(p);
    return f;
}

// Volumetric Fog
float volumetricFog(vec3 p, float time) {
    vec3 q = p * uFogScale;
    q.z += time * uFogFallSpeed;
    float n = fbm3d(q);
    return pow(n, uFogIntensity);
}

// Laser Beam
float laserBeam(vec2 uv, float time) {
    // Center the beam
    vec2 center = vec2(uBeamXFrac, uBeamYFrac);
    vec2 d = uv - center;
    
    // Anisotropy for beam shape
    d.x *= uFlowFactor;
    
    // Distance from center
    float dist = length(d);
    
    // Beam decay function
    float beam = pow(1.0 / (uFalloffStart + dist * dist), uDecay);
    
    // Flow modulation
    vec2 flow_uv = uv * 5.0;
    flow_uv.y += time * uFlowSpeed;
    float flow = noise(flow_uv);
    flow = pow(flow, uFlowFactor) * uFlowStrength;
    
    beam *= (1.0 + flow);
    
    return beam;
}

// Wisp Streaks
float wispStreaks(vec2 uv, float time) {
    vec2 wisp_uv = uv * uWispDensity;
    wisp_uv.y += time * 0.01 * uWispSpeed;
    float wisp = noise(wisp_uv);
    wisp = pow(wisp, 5.0) * uWispIntensity;
    return wisp;
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    
    // Correct aspect ratio
    uv.x *= iResolution.x / iResolution.y;
    
    // Tilt the fog volume based on mouse x
    float tilt = (iMouse.x / iResolution.x - 0.5) * uMouseTiltStrength;
    
    // Final position for volumetric fog
    vec3 p = vec3(uv.x, uv.y, tilt);
    
    float fog = volumetricFog(p, uFogTime);
    float beam = laserBeam(uv, uFlowTime);
    float wisps = wispStreaks(uv, uFlowTime);
    
    // Combine effects
    float final_effect = beam + fog + wisps;
    
    // Color the output
    vec3 final_color = uColor * final_effect;
    
    gl_FragColor = vec4(final_color, 1.0);
}
`;

interface LaserFlowProps {
  horizontalBeamOffset?: number;
  verticalBeamOffset?: number;
  horizontalSizing?: number;
  verticalSizing?: number;
  wispDensity?: number;
  wispSpeed?: number;
  wispIntensity?: number;
  flowSpeed?: number;
  flowStrength?: number;
  fogIntensity?: number;
  fogScale?: number;
  fogFallSpeed?: number;
  mouseTiltStrength?: number;
  mouseSmoothTime?: number;
  decay?: number;
  falloffStart?: number;
  dpr?: number | 'auto';
  color?: string;
}

const LaserFlow: React.FC<LaserFlowProps> = ({
  horizontalBeamOffset = 0.1,
  verticalBeamOffset = 0.0,
  horizontalSizing = 0.5,
  verticalSizing = 2.0,
  wispDensity = 1,
  wispSpeed = 15.0,
  wispIntensity = 5.0,
  flowSpeed = 0.35,
  flowStrength = 0.25,
  fogIntensity = 0.45,
  fogScale = 0.3,
  fogFallSpeed = 0.6,
  mouseTiltStrength = 0.01,
  mouseSmoothTime = 0.0,
  decay = 1.1,
  falloffStart = 1.2,
  dpr = 'auto',
  color = '#FF79C6',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef(new THREE.Vector4(0, 0, 0, 0));
  const uniforms = useRef({
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },
    iMouse: { value: mouse.current },
    uWispDensity: { value: wispDensity },
    uTiltScale: { value: horizontalSizing },
    uFlowTime: { value: 0 },
    uFogTime: { value: 0 },
    uBeamXFrac: { value: horizontalBeamOffset },
    uBeamYFrac: { value: verticalBeamOffset },
    uFlowSpeed: { value: flowSpeed },
    uFlowFactor: { value: flowStrength },
    uFogIntensity: { value: fogIntensity },
    uFogScale: { value: fogScale },
    uFogFallSpeed: { value: fogFallSpeed },
    uMouseTiltStrength: { value: mouseTiltStrength },
    uDecay: { value: decay },
    uFalloffStart: { value: falloffStart },
    uColor: { value: new THREE.Color(color) },
  });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    let frameId: number;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(dpr === 'auto' ? window.devicePixelRatio : dpr);
    renderer.setClearColor(0x000000, 1);
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    uniforms.current.iResolution.value.set(width, height, 1);
    uniforms.current.uColor.value.set(color);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms.current,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      uniforms.current.iTime.value = elapsed;
      uniforms.current.uFlowTime.value = elapsed * flowSpeed;
      uniforms.current.uFogTime.value = elapsed * fogFallSpeed;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const onResize = () => {
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      renderer.setSize(newWidth, newHeight);
      uniforms.current.iResolution.value.set(newWidth, newHeight, 1);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Smooth mouse movement (simplified for now)
      if (mouseSmoothTime > 0) {
        mouse.current.x += (x - mouse.current.x) * (1 - Math.exp(-1 / (mouseSmoothTime * 60)));
        mouse.current.y += (y - mouse.current.y) * (1 - Math.exp(-1 / (mouseSmoothTime * 60)));
      } else {
        mouse.current.x = x;
        mouse.current.y = y;
      }
      
      mouse.current.z = width;
      mouse.current.w = height;
    };

    currentMount.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      currentMount.removeEventListener('mousemove', onMouseMove);
      currentMount.removeChild(renderer.domElement);
    };
  }, [
    horizontalBeamOffset,
    verticalBeamOffset,
    horizontalSizing,
    verticalSizing,
    wispDensity,
    wispSpeed,
    wispIntensity,
    flowSpeed,
    flowStrength,
    fogIntensity,
    fogScale,
    fogFallSpeed,
    mouseTiltStrength,
    mouseSmoothTime,
    decay,
    falloffStart,
    dpr,
    color,
  ]);

  return <div ref={mountRef} className="laser-flow-container" />;
};

export default LaserFlow;