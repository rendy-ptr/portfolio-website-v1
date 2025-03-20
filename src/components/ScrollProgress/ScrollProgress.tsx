"use client";

import React, { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll();

  if (!isMounted) return null;

  return (
    <motion.div
      className="h-1 z-50 bg-gradient-to-r from-[#00F0FF] via-[#FF00C8] to-[#FFAC00] fixed top-0 left-0 w-full origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
