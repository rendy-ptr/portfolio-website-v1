"use client";
import type React from "react";
import { motion } from "framer-motion";
import { staggerContainer, CreateAnimation } from "@/animations/animation";
import { PROJECTS } from "@/constant/index";
import { CardBeam } from "@/components/Cards/CardBeam";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { lucideIcons } from "@/icon/lucide-icons";

const MyProjectsPage: React.FC = () => {
  return (
    <motion.section
      key="my-projects-details"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 mt-10 mb-10">
      <motion.h1
        variants={CreateAnimation("left", 1.0)}
        className="text-4xl font-bold text-white mb-8">
        MY PROJECTS
      </motion.h1>
      <motion.div
        variants={CreateAnimation("up", 0.5)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.LIST.map((project, index) => (
          <CardBeam key={index} {...project} />
        ))}
      </motion.div>
      <motion.h1
        variants={CreateAnimation("up", 1.0)}
        className="text-2xl font-bold text-white text-center mt-8">
        Go Back
      </motion.h1>
      <motion.div
        variants={CreateAnimation("up", 1.0)}
        className="flex items-center justify-center mt-4">
        <Link href="/" prefetch={false}>
          <InteractiveHoverButton variant="loadmore" icon={<lucideIcons.House size={20} />}>
            Home
          </InteractiveHoverButton>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default MyProjectsPage;
