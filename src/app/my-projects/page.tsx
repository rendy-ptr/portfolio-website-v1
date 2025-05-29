"use client";
import type React from "react";
import { motion } from "framer-motion";
import { staggerContainer, CreateAnimation } from "@/animations/animation";
import { PROJECTS } from "@/constant/index";
import { CardBeam } from "@/components/Cards/CardBeam";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import { lucideIcons } from "@/icon/lucide-icons";

const MyProjectsPage: React.FC = () => {
  return (
    <motion.section
      key="my-projects-details"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
      <motion.h1
        variants={CreateAnimation("left", 1.0)}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 lg:mb-12">
        MY PROJECTS
      </motion.h1>
      <motion.div
        variants={CreateAnimation("up", 0.5)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {PROJECTS.LIST.map((project, index) => (
          <CardBeam key={index} {...project} />
        ))}
      </motion.div>
      <motion.h1
        variants={CreateAnimation("up", 1.0)}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-6 sm:mt-8 lg:mt-12">
        Back To Homepage
      </motion.h1>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        variants={CreateAnimation("up", 1.0)}
        className="flex items-center justify-center mt-4 sm:mt-6 lg:mt-8">
        <Link href="/" prefetch={false}>
          <Button
            variant="loadmore"
            rounded={true}
            icon={<lucideIcons.House size={16} className="sm:size-20" />}
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
            Homepage
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default MyProjectsPage;
