"use client";

import { AnimatePresence } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import ParticlesDemo from "@/components/Particles/Particles";

export default function ClientLayouts({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#171717] text-white">
      <ScrollProgress />
      <ParticlesDemo />
      <AnimatePresence mode="wait">
        <main>{children}</main>
      </AnimatePresence>
    </div>
  );
}
