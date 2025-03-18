"use client";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, useGLTF, useTexture } from "@react-three/drei";
import {
  Physics,
  type RapierRigidBody,
  RigidBody,
  BallCollider,
  CuboidCollider,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

import type { CustomMeshLineMaterialProps } from "../../../types/registry/registryType";
import { segmentProps } from "../../../types/registry/registryType";

extend({
  MeshLineGeometry: MeshLineGeometry,
  MeshLineMaterial: MeshLineMaterial,
});

function Lanyard({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material>>(null);

  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody>(null);
  const j2 = useRef<RapierRigidBody>(null);
  const j3 = useRef<RapierRigidBody>(null);
  const card = useRef<RapierRigidBody>(null);
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  const { nodes, materials } = useGLTF("/lanyard/card.glb");
  const texture = useTexture("/lanyard/lanyard-2.png");

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.2]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.2]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.2]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (
      !fixed.current ||
      !j1.current ||
      !j2.current ||
      !j3.current ||
      !band.current ||
      !card.current
    )
      return;

    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    const [j1Lerped, j2Lerped] = [j1, j2].map((ref) => {
      if (ref.current) {
        const lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, lerped.distanceTo(ref.current.translation()))
        );
        return lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      }
    });

    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2Lerped ?? j2.current.translation());
    curve.points[2].copy(j1Lerped ?? j1.current.translation());
    curve.points[3].copy(fixed.current.translation());
    (band.current.geometry as unknown as MeshLineGeometry).setPoints(curve.getPoints(32));

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, false);
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 5, 0]}>
        <RigidBody ref={fixed} type="fixed" position={[0, 0.1, 0]} />
        <RigidBody position={[0.5, 0, 0]} {...segmentProps} ref={j1}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} {...segmentProps} ref={j2}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2.5, 0, 0]} {...segmentProps} ref={j3}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody ref={card} {...segmentProps} type={dragged ? "kinematicPosition" : "dynamic"}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={() => drag(false)}
            onPointerDown={(evt) =>
              card.current &&
              drag(new THREE.Vector3().copy(evt.point).sub(vec.copy(card.current.translation())))
            }>
            <mesh geometry={(nodes.card as THREE.Mesh).geometry}>
              <meshPhysicalMaterial
                map={(materials.base as THREE.MeshStandardMaterial).map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh
              geometry={(nodes.clip as THREE.Mesh).geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={(nodes.clamp as THREE.Mesh).geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          {...({
            color: "white",
            depthTest: false,
            useMap: true,
            map: texture,
            repeat: [-4, 1],
            lineWidth: 0.23,
          } as CustomMeshLineMaterialProps)}
        />
      </mesh>
    </>
  );
}

export default function LanyardCard({ debug = false }) {
  return (
    //mr-24 for set right corner
    <div className="absolute top-0 right-0 w-1/2 h-screen flex justify-start items-start bg-transparent ">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
        }}>
        <ambientLight intensity={Math.PI} />
        <Physics debug={debug} interpolate gravity={[0, -38, 0]} timeStep={1 / 60}>
          <Lanyard />
        </Physics>
        <Environment background={false} blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}
