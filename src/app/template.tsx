"use client";

import { AnimatePresence } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import ParticlesDemo from "@/components/Particles/Particles";

export default function ClientLayouts({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#171717] text-white overflow-x-hidden">
      <ScrollProgress />
      <ParticlesDemo />
      <AnimatePresence mode="wait">
        <main className="overflow-x-hidden">{children}</main>
      </AnimatePresence>
    </div>
  );
}
