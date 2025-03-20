"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

// Gunakan dynamic import biar gak error saat SSR
const Particles = dynamic(() => import("../magicui/particles"), { ssr: false });

const ParticlesWrapper = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const color = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="fixed top-0 left-0 w-full h-full z-1 pointer-events-none">
      <Particles className="absolute inset-0" quantity={100} ease={80} color={color} refresh />
    </div>
  );
};

export default ParticlesWrapper;
