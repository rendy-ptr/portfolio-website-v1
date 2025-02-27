"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoadingScreenProps } from "../../types/registry/registryType"


const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();
    const duration = 3000; // 3 seconds total duration

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else if (newProgress === 100) {
        // Tambah sedikit delay setelah mencapai 100%
        setTimeout(() => {
          onComplete();
        }, 100);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <motion.h1
        className="text-xl uppercase font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        For best experience use desktop screen
      </motion.h1>

      <div className="w-1/2 bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-xl font-semibold">{Math.floor(progress)}%</p>
    </div>
  );
};

export default LoadingScreen;
