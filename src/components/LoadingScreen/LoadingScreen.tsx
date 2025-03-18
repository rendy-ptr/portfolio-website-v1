"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { CreateAnimation, staggerContainer } from "@/animations/animation";
import type { LoadingScreenProps } from "@/types/registry/registryType";

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const duration = useRef(Math.random() * 2000 + 3000); // 3-5 detik

  useEffect(() => {
    startTimeRef.current = performance.now();

    const updateProgress = (time: number) => {
      if (!startTimeRef.current) return;

      const elapsed = time - startTimeRef.current;
      const nextProgress = Math.min((elapsed / duration.current) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 300);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
      variants={staggerContainer(0.3)}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <motion.h1 className="text-xl uppercase font-bold mb-4" variants={CreateAnimation("up", 0.5)}>
        For best experience use desktop screen
      </motion.h1>
      <div className="w-1/2 bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <motion.p className="mt-4 text-xl font-semibold" variants={CreateAnimation("up", 0.5)}>
        {Math.floor(progress)}%
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
