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
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      <motion.h1
        variants={CreateAnimation("left", 1.0)}
        className="text-4xl font-bold text-white mb-8">
        {PROJECTS.TITLE}
      </motion.h1>
      <motion.div
        variants={CreateAnimation("up", 1.0)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.LIST.slice(0, 3).map((project, index) => (
          <CardBeam key={index} {...project} />
        ))}
      </motion.div>
      <motion.h1
        variants={CreateAnimation("up", 1.0)}
        className="text-4xl font-bold text-white text-center mt-8">
        {PROJECTS.OTHER}
      </motion.h1>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        variants={CreateAnimation("up", 1.0)}
        className="flex items-center justify-center mt-4">
        <Link href="/my-projects" prefetch={false}>
          <Button variant="loadmore" icon={<lucideIcons.ArrowUpRight size={20} />} rounded={true}>
            {PROJECTS.BUTTON}
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
