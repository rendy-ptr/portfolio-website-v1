import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import SkillSection from "../sections/SkiilsSection";
import ProjectsSection from "../sections/ProjectsSection";
import CertificateSection from "../sections/CertificateSection";
import Navbar from "@/components/Navbar/Navbar";
import ContactSection from "@/sections/ContactSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="space-y-32">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <ProjectsSection />
        <CertificateSection />
        <ContactSection />
      </div>
    </>
  );
}
