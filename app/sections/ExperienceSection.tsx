"use client";

import { motion } from "framer-motion";
import { staggerContainer, CreateAnimation } from "../animations/animation";
import { EXPERIENCE } from "../constant/index";
import CustomCard from "../components/Cards/Card"

const ExperienceSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="container py-16"
    >
      <motion.div variants={CreateAnimation("left", 2.0)}>
        <h1 className="text-4xl font-bold text-white mb-8">
          {EXPERIENCE.TITLE}
        </h1>
      <CustomCard />
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
