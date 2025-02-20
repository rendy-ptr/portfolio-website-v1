"use client";

import { motion } from "framer-motion";
import { staggerContainer, CreateAnimation } from "../animations/animation";
import { EXPERIENCE } from "../constant/index";
import CustomCard from "../components/Cards/Card";
import GitHubCalendar from "../components/GithubCalendar/GithubCalendar";

const ExperienceSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="container py-16"
    >
      <motion.div className="flex justify-between">
        <motion.h1
          variants={CreateAnimation("left", 2.0)}
          className="text-4xl font-bold text-white mb-8"
        >
          {EXPERIENCE.TITLE}
        </motion.h1>
        <motion.h1
          variants={CreateAnimation("right", 2.0)}
          className="text-4xl font-bold text-white mb-8"
        >
          {EXPERIENCE.GITHUB}
        </motion.h1>
      </motion.div>
      <motion.div className="flex justify-between gap-1">
        <motion.div variants={CreateAnimation("left", 2.0)}>
          <CustomCard
            title="Internship as a Teknikal Programmer at PT. Jidoka System Indonesia"
            body="March, 2023 - June, 2023 • 3 months"
            footer="Internship as a Teknikal Programmer at PT. Jidoka System Indonesia"
          />
        </motion.div>
        <motion.div variants={CreateAnimation("right", 2.0)}>
          <GitHubCalendar />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
