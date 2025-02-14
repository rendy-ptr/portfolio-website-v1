import React, { Suspense, lazy } from "react";
import "./App.css";
import HomeSection from "../src/Section/HomeSection";
import AboutSection from "./Section/AboutSection";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const ParticlesDemo = lazy(() => import("./components/Particles/Particles"));



const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div>Loading Particles...</div>}>
        <ParticlesDemo />
      </Suspense>

      {/* Wrapper untuk memastikan margin kanan-kiri seragam */}
      <div className="container mx-auto">
        <HomeSection />
        <AboutSection />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default App;
