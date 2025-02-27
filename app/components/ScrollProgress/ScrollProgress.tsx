"use client";

import React from "react";
import { useScroll, motion } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="h-1 z-50 bg-gradient-to-r from-[#00F0FF] via-[#FF00C8] to-[#FFAC00] fixed top-0 left-0 w-full origin-left"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgress;
