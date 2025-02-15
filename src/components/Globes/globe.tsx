import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { LineSegments, SphereGeometry, MathUtils } from "three";

function Scene() {
  const meshRef = useRef<LineSegments>(null);
  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [pauseBeforeReturn, setPauseBeforeReturn] = useState(false);
  const returnSpeed = 0.1;
  const pauseDuration = 3000; // 3 detik sebelum kembali

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    if (isDragging.current) {
      setIsAutoRotating(false);
      setPauseBeforeReturn(false);
    } else if (pauseBeforeReturn) {
      // Tunggu sebelum kembali ke posisi semula
      setTimeout(() => {
        setPauseBeforeReturn(false);
        setIsAutoRotating(false);
      }, pauseDuration);
    } else if (!isAutoRotating) {
      meshRef.current.rotation.x = MathUtils.lerp(
        meshRef.current.rotation.x,
        0,
        returnSpeed
      );
      meshRef.current.rotation.y = MathUtils.lerp(
        meshRef.current.rotation.y,
        0,
        returnSpeed
      );
      meshRef.current.rotation.z = MathUtils.lerp(
        meshRef.current.rotation.z,
        0,
        returnSpeed
      );

      if (
        Math.abs(meshRef.current.rotation.x) < 0.001 &&
        Math.abs(meshRef.current.rotation.y) < 0.001 &&
        Math.abs(meshRef.current.rotation.z) < 0.001
      ) {
        setIsAutoRotating(true);
        meshRef.current.rotation.set(0, 0, 0);
      }
    } else {
      meshRef.current.rotation.y += 0.5 * delta;
    }
  });

  const handlePointerDown = (e: any) => {
    isDragging.current = true;
    prevMousePos.current = {
      x: e.clientX,
      y: e.clientY,
    };
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: any) => {
    isDragging.current = false;
    e.target.releasePointerCapture(e.pointerId);
    setPauseBeforeReturn(true);
  };

  const handlePointerMove = (e: any) => {
    if (!isDragging.current || !meshRef.current) return;

    const deltaX = e.clientX - prevMousePos.current.x;
    const deltaY = e.clientY - prevMousePos.current.y;

    meshRef.current.rotation.y += deltaX * 0.005;
    meshRef.current.rotation.x += deltaY * 0.005;

    prevMousePos.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  return (
    <lineSegments
      ref={meshRef}
      scale={0.9}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <edgesGeometry args={[new SphereGeometry(1, 10, 10)]} />
      <lineBasicMaterial color="#94a2b7" linewidth={1.5} />
    </lineSegments>
  );
}

// Globe.tsx
export default function Globe() {
  return (
    <div className="relative">
      <div
        className="flex-shrink-0"
        style={{
          backgroundColor: "#262626",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-[65px] h-[65px]">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <Scene />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
