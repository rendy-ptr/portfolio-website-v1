import type React from "react";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { ABOUT_ME } from "../constant/index";
import { CreateAnimation, staggerContainer } from "../Animations/animation";
import TextReveal from "../components/Text-Reveal/TextReveal";

const Globe = lazy(() => import("../components/Globes/globe"));

const AboutSection: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="container py-16"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <motion.div
          variants={CreateAnimation("left", 1.0)}
          className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            {ABOUT_ME.TITLE}
          </h1>
        </motion.div>

        <motion.div
          variants={CreateAnimation("right", 1.0)}
          className="flex-shrink-0"
        >
          <Suspense fallback={<div>Loading Globe...</div>}>
            <Globe />
          </Suspense>
        </motion.div>
      </div>

      <motion.div
        variants={CreateAnimation("up", 1.0)}
        className="mt-4"
      >
        <TextReveal />
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
