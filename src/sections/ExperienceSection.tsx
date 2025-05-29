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
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.5)}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
      <motion.div>
        <motion.div
          variants={CreateAnimation("left", 1.0)}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {EXPERIENCE.TITLE}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-0 mt-1 rounded-full"></div>
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
        <motion.div variants={CreateAnimation("up", 1.0)} className="w-full">
          <CustomCard experience={EXPERIENCE.LIST} />
        </motion.div>
      </motion.div>
      <motion.div>
        <motion.div
          variants={CreateAnimation("left", 1.0)}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {EXPERIENCE.GITHUB}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-0 mt-1 rounded-full"></div>
        </motion.div>
        <motion.div variants={CreateAnimation("up", 1.0)}>
          <GitHubCalendar />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
