"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ABOUT_ME } from "@/constant/index";
import { CreateAnimation, staggerContainer } from "@/animations/animation";
import TextReveal from "@/components/Text-Reveal/TextReveal";
import Globe from "@/components/Globes/globe";

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about-me"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      <div className="flex flex-row items-center justify-between gap-4 mb-6">
        <motion.div variants={CreateAnimation("left", 1.0)} className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {ABOUT_ME.TITLE}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-0 mt-1 rounded-full"></div>
        </motion.div>

        <motion.div variants={CreateAnimation("right", 1.0)} className="flex-shrink-0">
          <Globe />
        </motion.div>
      </div>
      <TextReveal />
    </motion.section>
  );
};

export default AboutSection;
