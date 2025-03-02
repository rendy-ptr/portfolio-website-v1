"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "../magicui/particles";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-1 pointer-events-none">
      <Particles className="absolute inset-0" quantity={100} ease={80} color={color} refresh />
    </div>
  );
};

export default ParticlesDemo;
