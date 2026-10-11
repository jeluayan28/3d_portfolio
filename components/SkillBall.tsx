"use client";

import { Suspense } from "react";
import { Decal, Float, OrbitControls, PerspectiveCamera, useTexture, View } from "@react-three/drei";

function Ball({ icon }: { icon: string }) {
  const decal = useTexture(icon);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
      </mesh>
    </Float>
  );
}

/**
 * A draggable, floating icosahedron "ball" with a tech logo decal.
 * Rendered through the shared canvas in <SkillsStage>: browsers cap live WebGL
 * contexts (~16), so one canvas draws every ball instead of one canvas per ball.
 */
export function SkillBall({ icon }: { icon: string }) {
  return (
    <View className="h-full w-full">
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball icon={icon} />
      </Suspense>
    </View>
  );
}
