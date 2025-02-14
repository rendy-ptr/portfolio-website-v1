import type React from "react";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { ABOUT_ME } from "../constant/index";
import { fadeInUp } from "../Animations/animation";
import TextReveal from "../components/Text-Reveal/TextReveal";

const Globe = lazy(() => import("../components/Globes/globe"));

const AboutSection: React.FC = () => {
  return (
    <section className="container py-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            {ABOUT_ME.TITLE}
          </h1>
        </div>

        <div className="flex-shrink-0">
          <Suspense fallback={<div>Loading Globe...</div>}>
            <Globe />
          </Suspense>
        </div>
      </div>

      <motion.div variants={fadeInUp} className="mt-8">
        <TextReveal />
      </motion.div>
    </section>
  );
};

export default AboutSection;
