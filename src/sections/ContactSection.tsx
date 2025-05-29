"use client";

import type React from "react";
import { motion } from "framer-motion";
import { staggerContainer, CreateAnimation } from "@/animations/animation";
import { CONTACT_ME } from "@/constant/index";
import FormContact from "@/components/form/FormContact";

const ContactSection: React.FC = () => {
  return (
    <motion.section
      id="contact-me"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
      <motion.div
        className="text-4xl font-bold text-white mb-8"
        variants={CreateAnimation("left", 1.0)}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {CONTACT_ME.TITLE}
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-0 mt-1 rounded-full"></div>
      </motion.div>
      <motion.div variants={CreateAnimation("up", 1.0)}>
        <FormContact />
      </motion.div>
    </motion.section>
  );
};
export default ContactSection;
