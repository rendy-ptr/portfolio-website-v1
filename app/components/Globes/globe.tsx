import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { useRef, useState } from "react";
import { LineSegments, SphereGeometry, MathUtils } from "three";

function Scene({ setCursor }: { setCursor: (cursor: string) => void }) {
  const meshRef = useRef<LineSegments>(null);
  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [pauseBeforeReturn, setPauseBeforeReturn] = useState(false);
  const returnSpeed = 0.1;
  const pauseDuration = 2000;

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    if (isDragging.current) {
      setIsAutoRotating(false);
      setPauseBeforeReturn(false);
    } else if (pauseBeforeReturn) {
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

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    isDragging.current = true;
    setCursor("grabbing");
    prevMousePos.current = { x: e.clientX, y: e.clientY };

    if (e.currentTarget) {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging.current || !meshRef.current) return;

    const deltaX = e.clientX - prevMousePos.current.x;
    const deltaY = e.clientY - prevMousePos.current.y;

    meshRef.current.rotation.y += deltaX * 0.005;
    meshRef.current.rotation.x += deltaY * 0.005;

    prevMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setCursor("grab");
      setPauseBeforeReturn(true);
    }
  };

  return (
    <lineSegments
      ref={meshRef}
      scale={0.9}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <edgesGeometry args={[new SphereGeometry(1, 10, 10)]} />
      <lineBasicMaterial color="#FFFFFF" linewidth={1} />
    </lineSegments>
  );
}

export default function Globe() {
  const [cursor, setCursor] = useState("grab");

  return (
    <div className="relative" style={{ cursor }}>
      <div
        className="flex-shrink-0"
        style={{
          backgroundColor: "#121212",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 15px #A8A8A8",
        }}
      >
        <div className="w-[65px] h-[65px]">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <Scene setCursor={setCursor} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
