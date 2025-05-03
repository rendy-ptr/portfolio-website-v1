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
    // Menghapus rotasi pada sumbu X
  });

  return (
    <lineSegments ref={meshRef} scale={0.9}>
      <edgesGeometry args={[new SphereGeometry(1, 10, 10)]} />
      <lineBasicMaterial color="#A3A3A3" linewidth={1} />
    </lineSegments>
  );
}

export default function Globe() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="relative">
      <div
        className="flex-shrink-0"
        style={{
          backgroundColor: "#232323",
          borderRadius: "50%",
          width: isMobile ? "50px" : "60px",
          height: isMobile ? "50px" : "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 15px rgba(170, 170, 170, 0.3)",
        }}>
        <div className={`${isMobile ? "w-[55px] h-[55px]" : "w-[65px] h-[65px]"}`}>
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <Scene />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
