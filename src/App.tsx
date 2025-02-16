import React, { Suspense, lazy, useEffect } from "react";
import WebFont from "webfontloader";
import "./App.css";
import HomeSection from "../src/Section/HomeSection";
import AboutSection from "./Section/AboutSection";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const ParticlesDemo = lazy(() => import("./components/Particles/Particles"));

const App: React.FC = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["JetBrains Mono:100,200,300,400,500,600,700,800"],
      },
    });
  }, []);
  return (
    <div className="relative">
      {/* ScrollProgress di posisi paling atas */}
      <ScrollProgress />
      
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      
      <Suspense fallback={<div>Loading Particles...</div>}>
        <ParticlesDemo />
      </Suspense>

      <div className="container mx-auto min-h-screen">
        <HomeSection />
        <AboutSection />
        {/* Tambahkan div dengan height besar untuk memastikan ada scroll */}
        <div className="h-[200vh]" /> 
      </div>
    </div>
  );
};

export default App;