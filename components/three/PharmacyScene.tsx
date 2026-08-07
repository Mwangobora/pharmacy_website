"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const PRIMARY = "#3b82f6";
const SECONDARY = "#22c55e";
const ACCENT = "#f59e0b";

function Capsule({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Group>(null);

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.4}>
      <group ref={ref} position={position} scale={scale} rotation={[0.4, 0.5, 0.2]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.42, 1.05, 8, 24]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.22}
            metalness={0.05}
            clearcoat={0.6}
            clearcoatRoughness={0.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

function MedicineBottle() {
  return (
    <Float speed={0.8} rotationIntensity={0.25} floatIntensity={0.9}>
      <group position={[0, -0.2, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.85, 0.95, 1.9, 32]} />
          <meshPhysicalMaterial
            color="#eef2ff"
            roughness={0.15}
            metalness={0}
            transmission={0.55}
            thickness={0.6}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[0, 1.12, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.6, 0.42, 32]} />
          <meshPhysicalMaterial color={PRIMARY} roughness={0.35} metalness={0.15} />
        </mesh>
      </group>
    </Float>
  );
}

function MedicalCross({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.1}>
      <group position={position} rotation={[0.2, 0.3, 0]}>
        <RoundedBox args={[1.1, 0.36, 0.22]} radius={0.08} smoothness={4} castShadow>
          <meshPhysicalMaterial color={SECONDARY} roughness={0.3} clearcoat={0.5} />
        </RoundedBox>
        <RoundedBox args={[0.36, 1.1, 0.22]} radius={0.08} smoothness={4} castShadow>
          <meshPhysicalMaterial color={SECONDARY} roughness={0.3} clearcoat={0.5} />
        </RoundedBox>
      </group>
    </Float>
  );
}

function PointerRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const targetY = state.pointer.x * 0.35;
    const targetX = -state.pointer.y * 0.2;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} castShadow={false} />
      <pointLight position={[-4, -2, 2]} intensity={12} color={PRIMARY} />
      <pointLight position={[3, 3, -3]} intensity={8} color={ACCENT} />
    </>
  );
}

export function PharmacyScene() {
  const capsules = useMemo(
    () =>
      [
        { position: [2.3, 1.1, -0.4] as [number, number, number], color: PRIMARY, scale: 0.85, speed: 1.1 },
        { position: [-2.4, 0.6, 0.3] as [number, number, number], color: SECONDARY, scale: 0.7, speed: 1.4 },
        { position: [1.9, -1.5, 0.6] as [number, number, number], color: ACCENT, scale: 0.6, speed: 1.7 },
        { position: [-2, -1.2, -0.6] as [number, number, number], color: PRIMARY, scale: 0.55, speed: 1.3 },
      ],
    [],
  );

  return (
    <Canvas
      shadows={false}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Lights />
        <PointerRig>
          <MedicineBottle />
          {capsules.map((c, i) => (
            <Capsule key={i} {...c} />
          ))}
          <MedicalCross position={[2.6, -0.4, -1]} />
        </PointerRig>
      </Suspense>
    </Canvas>
  );
}
