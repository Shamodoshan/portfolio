import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Bounds } from '@react-three/drei';
import modelPath from '../assets/gaming_setup.glb';

function Model(props) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} {...props} />;
}

export default function HeroModel() {
  return (
    <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.15} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
          <spotLight position={[-5, 5, -5]} intensity={0.3} />

          <Bounds fit clip observe margin={1.2}>
            <Center>
              <Model scale={0.07} />
            </Center>
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2.5} minPolarAngle={Math.PI / 2.5} />
      </Canvas>
    </div>
  );
}
