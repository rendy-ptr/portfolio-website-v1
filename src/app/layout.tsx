"use client";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import ParticlesDemo from "../components/Particles/Particles";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // const metaData = {
  //   title: "My Portfolio Website",
  // image: "/og-image.png",
  // url: "https://portfolio-template.vercel.app",
  // };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
      </body>
    </html>
  );
}
