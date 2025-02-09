import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import CustomTypingText from "./components/CustomTypingText/CustomTypingText";
import Navbar from "./components/Navbar/Navbar";
import ParticlesDemo from "./components/Particles/Particles";
import Button from "./components/Buttons/Button";
import ProfileImages from "./components/ProfileImages/index";
import { TITLE, BUTTONS } from "../src/constant/index";
import { IconChevronRight, IconDownload } from "@tabler/icons-react";
import { fadeInUp, staggerContainer } from "./components/Animations/animation";



const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar tetap di posisi awal */}
      <Navbar />
      <ParticlesDemo />

      {/* Container untuk gambar dan teks */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col items-center justify-center min-h-screen text-center z-10"
      >
        {/* Gambar dengan animasi fade-in */}
        <motion.div variants={fadeInUp}>
          <ProfileImages src="../../src/assets/prof-7.jpg" alt="Profile" />
        </motion.div>

        {/* Teks dan Tombol */}
        <motion.div variants={fadeInUp}>
          <h1 className="text-2xl font-semibold text-[#D6D6D6]">
            {TITLE.TEXT}
          </h1>
          <h1 className="text-4xl font-bold text-[#EAE8D9]">{TITLE.NAME}</h1>
          {/* CustomTypingText sedikit ke kiri */}
          <div className="ml-[-50px]">
            <CustomTypingText />
          </div>
          <p className="mt-4 text-xl font-semibold text-[#A3A3A3]">
            {TITLE.DESCRIPTION}
            <span className="waving-hand" role="img" aria-label="waving hand">
              👋🏻
            </span>
          </p>
        </motion.div>

        {/* Tombol dengan efek hover dan tekan */}
        <motion.div
          className="flex justify-center mt-6 gap-3"
          variants={fadeInUp}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={() => console.log("Download CV")}
              icon={<IconDownload size={24} />}
              className="bg-black text-white hover:bg-gray-800"
            >
              {BUTTONS.DOWNLOAD_CV}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={() => console.log("Contact Me")}
              icon={<IconChevronRight size={24} />}
              className="bg-white text-black hover:bg-gray-200"
            >
              {BUTTONS.CONTACT_ME}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
