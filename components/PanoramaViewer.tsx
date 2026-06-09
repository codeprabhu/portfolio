"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useVideoTexture } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export const videoRef = {
  current: null as HTMLVideoElement | null,
};

function PanoramaSphere() {
  const texture = useVideoTexture("/panorama.mp4");

  const sphereRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const video = texture.image as HTMLVideoElement;

    if (video) {
      videoRef.current = video;
    }
  }, [texture]);

  useFrame(() => {
    const maxScroll =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =
      maxScroll > 0
        ? window.scrollY / maxScroll
        : 0;

    if (sphereRef.current) {
      sphereRef.current.rotation.set(
        0,
        progress * Math.PI * 2,
        0
      );
    }
  });

  return (
    <mesh
      ref={sphereRef}
      scale={[-1, 1, 1]}
    >
      <sphereGeometry args={[50, 64, 64]} />

      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

export default function PanoramaViewer() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 0.1],
        fov: 100,
      }}
    >
      <PanoramaSphere />
    </Canvas>
  );
}