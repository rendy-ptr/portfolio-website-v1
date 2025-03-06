"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import type { LoadingScreenProps } from "../../types/registry/registryType";

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let observer: PerformanceObserver | null = null;
    let detectedLCP = false;

    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry && !detectedLCP) {
          detectedLCP = true;
          const dynamicDuration = Math.min(lcpEntry.startTime + 1000, 5000);
          setDuration(dynamicDuration);
          startTimeRef.current = Date.now();
        }
      });
      observer.observe({ type: "largest-contentful-paint", buffered: true });
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (duration === null) return;
    startTimeRef.current = Date.now();

    const updateProgress = () => {
      if (startTimeRef.current === null || duration === null) return;
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
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

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration, onComplete]);

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
