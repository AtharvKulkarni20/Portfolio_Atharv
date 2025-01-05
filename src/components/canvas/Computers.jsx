import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Computers from './Computers'; // Your 3D model component

const ComputersCanvas = ({ pixelRatio = 1, camera }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={pixelRatio}
      camera={camera}
      gl={{ 
        powerPreference: "high-performance",
        antialias: false,
        stencil: false,
        depth: false 
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;