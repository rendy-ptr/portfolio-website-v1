"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

// Gunakan dynamic import biar gak error saat SSR
const Particles = dynamic(() => import("../magicui/particles"), { ssr: false });

const ParticlesWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Particles className="absolute inset-0" quantity={200} ease={80} color="#fff" refresh />
    </div>
  );
};

export default ParticlesWrapper;
