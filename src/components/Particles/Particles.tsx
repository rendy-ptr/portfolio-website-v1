"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "../../../@/components/magicui/particles";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
    
  console.log(theme);

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="absolute inset-0 h-full w-full z-0 pointer-events-none">
      <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
