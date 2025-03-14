"use client";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import "./index.css";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import ParticlesDemo from "../components/Particles/Particles";

// Import LoadingScreen dengan dynamic import untuk mencegah SSR chunk error
const LoadingScreen = dynamic(() => import("src/components/LoadingScreen/LoadingScreen"), {
  ssr: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {isLoading ? (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          ) : (
            <div className="relative min-h-screen">
              {/* Komponen Global */}
              <ScrollProgress />
              <ParticlesDemo />

              {/* Gunakan AnimatePresence untuk mengelola transisi halaman */}
              <AnimatePresence mode="wait">
                <main>{children}</main>
              </AnimatePresence>
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
