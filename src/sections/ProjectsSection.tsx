"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer, CreateAnimation } from "@/animations/animation";
import { PROJECTS } from "@/constant/index";
import { CardBeam } from "@/components/Cards/CardBeam";
import Button from "@/components/Buttons/Button";
import { lucideIcons } from "@/icon/lucide-icons";
import Link from "next/link";

const ProjectsSection: FC = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.3)}
      className="w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-12 md:py-16">
      <motion.div
        variants={CreateAnimation("left", 0.8)}
        className="sm:text-left mb-6 sm:mb-8 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {PROJECTS.TITLE}
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-0 mt-1 rounded-full"></div>
      </motion.div>

      <motion.div
        variants={CreateAnimation("up", 0.8)}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {PROJECTS.LIST.slice(0, 3).map((project, index) => (
          <motion.div
            key={index}
            variants={CreateAnimation("up", 0.2 * index)}
            className="flex justify-center">
            <CardBeam {...project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={CreateAnimation("up", 0.8)} className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {PROJECTS.OTHER}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
          Lihat koleksi lengkap proyek-proyek yang telah saya kerjakan
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        variants={CreateAnimation("up", 0.8)}
        className="flex justify-center">
        <Link href="/my-projects" prefetch={false}>
          <Button
            variant="loadmore"
            icon={<lucideIcons.ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />}
            rounded={true}
            className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            {PROJECTS.BUTTON}
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
