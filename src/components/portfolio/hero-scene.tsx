import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

// Architectural node positions representing full-stack distributed systems
const nodes: { pos: [number, number, number]; label: string; color: string; size: number }[] = [
  { pos: [-2.2, 1.2, 0.2], label: "CLIENT", color: "#38bdf8", size: 0.2 },
  { pos: [-0.8, 1.8, -0.4], label: "API GATEWAY", color: "#10b981", size: 0.24 },
  { pos: [1.1, 1.3, 0.4], label: "SPRING BOOT", color: "#34d399", size: 0.26 },
  { pos: [2.3, 1.5, -0.2], label: "MICROSERVICES", color: "#6366f1", size: 0.2 },
  { pos: [-1.6, -0.4, 0.3], label: "NEXT.JS", color: "#38bdf8", size: 0.22 },
  { pos: [0, -0.05, 0], label: "REDIS DISTRIBUTED LOCK", color: "#f43f5e", size: 0.36 }, // Centerpiece node
  { pos: [1.8, -0.5, 0.4], label: "POSTGRESQL", color: "#06b6d4", size: 0.25 },
  { pos: [-0.9, -1.7, -0.3], label: "PRISMA ORM", color: "#10b981", size: 0.22 },
  { pos: [1.2, -1.6, 0.2], label: "DOCKER / CLOUD", color: "#818cf8", size: 0.22 },
];

const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3],
  [0, 4], [1, 5], [2, 5], [2, 6],
  [4, 5], [5, 6],
  [4, 7], [5, 7], [5, 8], [6, 8],
  [7, 8], [3, 6]
];

function InteractiveCore() {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.05, 0]}>
      <octahedronGeometry args={[0.42, 0]} />
      <meshStandardMaterial
        color="#10b981"
        emissive="#059669"
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}

function PulsingRing() {
  const ringRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, -0.05, 0]}>
      <torusGeometry args={[2.8, 0.012, 16, 120]} />
      <meshBasicMaterial color="#10b981" transparent opacity={0.35} />
    </mesh>
  );
}

function SecondRing() {
  const ringRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.y = Math.PI / 3 + Math.cos(state.clock.elapsedTime * 0.25) * 0.15;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, -0.05, 0]}>
      <torusGeometry args={[3.2, 0.008, 16, 120]} />
      <meshBasicMaterial color="#38bdf8" transparent opacity={0.25} />
    </mesh>
  );
}

function Network() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const targetX = state.pointer.y * 0.25;
    const targetY = state.pointer.x * 0.35 + state.clock.elapsedTime * 0.04;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
  });

  return (
    <group ref={group}>
      {/* Sparkles background for ambient depth */}
      <Sparkles count={45} scale={6} size={2} speed={0.4} opacity={0.3} color="#34d399" />

      {/* Network Links with Neon Shimmer */}
      {links.map(([a, b]) => {
        const start = nodes[a]?.pos;
        const end = nodes[b]?.pos;
        if (!start || !end) return null;
        return (
          <Line
            key={`link-${a}-${b}`}
            points={[start, end]}
            color={a === 5 || b === 5 ? "#10b981" : "#0284c7"}
            transparent
            opacity={a === 5 || b === 5 ? 0.45 : 0.2}
            lineWidth={1.2}
          />
        );
      })}

      {/* Centerpiece 3D Core */}
      <InteractiveCore />

      {/* Outer Orbit Rings */}
      <PulsingRing />
      <SecondRing />

      {/* Floating System Nodes */}
      {nodes.map((node, index) => {
        if (index === 5) return null; // Rendered as InteractiveCore
        return (
          <Float
            key={`node-${index}`}
            speed={1.5 + (index % 3) * 0.4}
            rotationIntensity={0.3}
            floatIntensity={0.35}
          >
            <mesh position={node.pos}>
              <icosahedronGeometry args={[node.size, 1]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.3}
                roughness={0.25}
                metalness={0.7}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="h-full min-h-[440px] w-full cursor-grab active:cursor-grabbing" aria-label="Interactive 3D distributed systems network visualization">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.2], fov: 46 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[4, 5, 4]} intensity={18} color="#10b981" />
        <pointLight position={[-4, -3, 3]} intensity={14} color="#38bdf8" />
        <pointLight position={[0, 0, 5]} intensity={8} color="#ffffff" />
        <Network />
      </Canvas>
    </div>
  );
}