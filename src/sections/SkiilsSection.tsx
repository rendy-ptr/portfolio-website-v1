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
      className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      <motion.h1
        variants={CreateAnimation("left", 1.0)}
        className="text-4xl font-bold text-white mb-8">
        {SKILLS.TITLE}
      </motion.h1>
      <motion.div variants={CreateAnimation("up", 1.0)}>
        <SkillBeam />
      </motion.div>
    </motion.section>
  );
};

export default SkillSection;
