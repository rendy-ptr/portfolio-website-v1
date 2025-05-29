"use client";

import type { FC } from "react";
import { staggerContainer, CreateAnimation } from "@/animations/animation";
import { SKILLS } from "@/constant/index";
import { motion } from "framer-motion";
import { SkillBeam } from "@/components/SkillsBeam/SkillBeam";

const SkillSection: FC = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16">
      <motion.div
        variants={CreateAnimation("left", 1.0)}
        className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {SKILLS.TITLE}
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-0 mt-3 rounded-full"></div>
      </motion.div>
      <motion.div variants={CreateAnimation("up", 1.0)}>
        <SkillBeam />
      </motion.div>
    </motion.section>
  );
};

export default SkillSection;
