import "./globals.css";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import Navbar from "../components/Navbar/Navbar";
import ParticlesDemo from "../components/Particles/Particles";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import SkillSection from "../sections/SkiilsSections";
import ProjectsSection from "../sections/ProjectsSection";
import CertificateSection from "../sections/CertificateSection";

export default function Page() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <ParticlesDemo />
      <div className="container mx-auto min-h-screen space-y-32">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <ProjectsSection />
        <CertificateSection />
        <div className="h-[200vh]" />
      </div>
    </div>
  );
}
