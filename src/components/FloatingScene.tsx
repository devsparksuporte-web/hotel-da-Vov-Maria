'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, MeshDistortMaterial, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObject({ color, speed, distort, offset }: { color: string, speed: number, distort: number, offset: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  // Responsive position based on viewport size + custom offset
  const position: [number, number, number] = [
    viewport.width * offset[0],
    viewport.height * offset[1],
    offset[2]
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * speed * 0.2;
    mesh.current.rotation.y = t * speed * 0.3;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position} ref={mesh}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={0.5}
          emissive={color}
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 1.2, 0.07);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 1.2, 0.07);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function FloatingScene() {
  return (
    <div 
      style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <Canvas dpr={[1, 2]} flat>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#C5A059" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#0A1128" />
          
          <FloatingObject offset={[-0.35, 0.2, -2]} color="#C5A059" speed={1.5} distort={0.4} />
          <FloatingObject offset={[0.35, -0.2, -1]} color="#0A1128" speed={1.2} distort={0.6} />
          <FloatingObject offset={[-0.2, -0.3, 0]} color="#D4B475" speed={2} distort={0.3} />
          <FloatingObject offset={[0.3, 0.3, -3]} color="#050816" speed={0.8} distort={0.5} />
          
          <Environment preset="sunset" />
          <Rig />
          <AdaptiveDpr pixelated={false} />
          <AdaptiveEvents />
        </Suspense>
      </Canvas>
    </div>
  );
}

