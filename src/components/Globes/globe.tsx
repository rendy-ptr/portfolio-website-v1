import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { LineSegments } from "three";
import { SphereGeometry } from "three";

function Scene() {
  const meshRef = useRef<LineSegments>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Rotasi hanya pada sumbu Y
    meshRef.current.rotation.y += 0.6 * delta;
  });

  return (
    <lineSegments ref={meshRef} scale={0.9}>
      <edgesGeometry args={[new SphereGeometry(1, 10, 10)]} />
      <lineBasicMaterial color="#A3A3A3" linewidth={1} />
    </lineSegments>
  );
}

export default function Globe() {
  return (
    <div className="relative">
      <div
        className="flex-shrink-0 rounded-full"
        style={{
          backgroundColor: "#232323",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 15px rgba(170, 170, 170, 0.3)",
        }}>
        <div className="w-[55px] h-[55px] md:w-[65px] md:h-[65px]">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <Scene />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
