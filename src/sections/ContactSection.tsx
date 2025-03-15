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
      <motion.h1
        className="text-4xl font-bold text-white mb-8"
        variants={CreateAnimation("left", 1.0)}>
        {CONTACT_ME.TITLE}
      </motion.h1>
      <motion.div variants={CreateAnimation("up", 1.0)}>
        <FormContact />
      </motion.div>
    </motion.section>
  );
};
export default ContactSection;
