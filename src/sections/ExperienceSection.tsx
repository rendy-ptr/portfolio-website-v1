"use client";

import { motion } from "framer-motion";
import { staggerContainer, CreateAnimation } from "@/animations/animation";
import { EXPERIENCE } from "@/constant/index";
import CustomCard from "@/components/Cards/Card";
import GitHubCalendar from "@/components/GithubCalendar/GithubCalendar";

const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="container py-16">
      <motion.div>
        <motion.h1
          variants={CreateAnimation("left", 1.0)}
          className="text-4xl font-bold text-white mb-8">
          {EXPERIENCE.TITLE}
        </motion.h1>
      </motion.div>
      <motion.div className="flex justify-between gap-2 items-stretch mb-8">
        <motion.div variants={CreateAnimation("up", 1.0)} className="flex-1 flex">
          <CustomCard experience={EXPERIENCE.LIST} />
        </motion.div>
      </motion.div>
      <motion.div>
        <motion.h1
          variants={CreateAnimation("left", 1.0)}
          className="text-4xl font-bold text-white mb-8">
          {EXPERIENCE.GITHUB}
        </motion.h1>
        <motion.div variants={CreateAnimation("up", 1.0)}>
          <GitHubCalendar />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
