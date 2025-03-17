"use client";

import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import ParticlesDemo from "@/components/Particles/Particles";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

export default function ClientLayouts({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen">
          <ScrollProgress />
          <ParticlesDemo />
          <AnimatePresence mode="wait">
            <main>{children}</main>
          </AnimatePresence>
        </div>
      )}
    </ThemeProvider>
  );
}
