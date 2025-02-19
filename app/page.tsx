import "./globals.css"
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Navbar from "./components/Navbar/Navbar";
import ParticlesDemo from "./components/Particles/Particles";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";

export default function Page() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <ParticlesDemo />
      <div className="container mx-auto min-h-screen">
        <HomeSection />
        <AboutSection />
        <ExperienceSection /> 
        <div className="h-[200vh]" />
      </div>
    </div>
  );
}
