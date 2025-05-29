"use client";

import type React from "react";
import { staggerContainer, CreateAnimation } from "@/animations/animation";
import { CERTIFICATE } from "@/constant/index";
import { motion } from "framer-motion";
import MovingCards from "@/components/InfiniteMovingCard/InfiniteMovingCard";

const CertificateSection: React.FC = () => {
  return (
    <motion.section
      id="certificate"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
      <motion.div
        variants={CreateAnimation("left", 1.0)}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {CERTIFICATE.TITLE}
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-0 mt-1 rounded-full"></div>
      </motion.div>
      <motion.div variants={CreateAnimation("up", 1.0)}>
        <MovingCards />
      </motion.div>
    </motion.section>
  );
};

export default CertificateSection;
