"use client";

import { FC } from "react";
import { staggerContainer, CreateAnimation } from "../animations/animation";
import { SKILLS } from "../constant/index";
import { motion } from "framer-motion";
import { Beam } from "app/components/AnimatedBeam/AnimatedBeam";

const SkillSection: FC = () => {
  return (
    <motion.div
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="container py-16"
    >
      <motion.h1
        variants={CreateAnimation("left", 1.0)}
        className="text-4xl font-bold text-white mb-8"
      >
        {SKILLS.TITLE}
      </motion.h1>
      <motion.div variants={CreateAnimation("up", 1.0)}>
        <Beam />
      </motion.div>
    </motion.div>
  );
};

export default SkillSection;
