"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import type { LoadingScreenProps } from "../../types/registry/registryType";

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const estimatedDuration = useRef<number | null>(null);

  useEffect(() => {
    const handleLoad = () => {
      const startLoad = performance.timeOrigin || performance.now();
      const loadTime = performance.now() - startLoad;

      // Pastikan durasi tidak negatif dan minimal 1000ms untuk smooth loading
      estimatedDuration.current = Math.max(loadTime + 1000, 1500, 5000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const waitForDuration = setInterval(() => {
      if (estimatedDuration.current !== null) {
        clearInterval(waitForDuration);
        startTimeRef.current = performance.now();
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    }, 10);

    const updateProgress = () => {
      if (!startTimeRef.current || estimatedDuration.current === null) return;
      const elapsed = performance.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / estimatedDuration.current) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsCompleted(true);
          onComplete();
        }, 500);
      }
    };

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      clearInterval(waitForDuration);
    };
  }, [onComplete]);

  if (isCompleted) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <motion.h1
        className="text-xl uppercase font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}>
        For best experience use desktop screen
      </motion.h1>

      <div className="w-1/2 bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-4 text-xl font-semibold">{Math.floor(progress)}%</p>
    </div>
  );
};

export default LoadingScreen;
