"use client";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import ParticlesDemo from "@/components/Particles/Particles";

export default function ClientLayouts({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="relative min-h-screen">
        <ScrollProgress />
        <ParticlesDemo />
        <AnimatePresence mode="wait">
          <main>{children}</main>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
