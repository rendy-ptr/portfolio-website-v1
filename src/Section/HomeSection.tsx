import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { TITLE, BUTTONS } from "../constant/index";
import { IconChevronRight, IconDownload } from "@tabler/icons-react";
import { fadeInUp, staggerContainer } from "../Animations/animation";

const ProfileImages = lazy(() => import("../components/ProfileImages/index"));
const CustomTypingText = lazy(
  () => import("../components/CustomTypingText/CustomTypingText")
);
const Button = lazy(() => import("../components/Buttons/Button"));

const HomeSection: React.FC = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col items-center justify-center min-h-screen text-center z-10"
      >
        <motion.div variants={fadeInUp}>
          <Suspense fallback={<div>Loading Profile...</div>}>
            <ProfileImages src="../../src/assets/prof-7.jpg" alt="Profile" />
          </Suspense>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h1 className="text-2xl font-semibold text-[#D6D6D6]">
            {TITLE.TEXT}
          </h1>
          <h1 className="text-4xl font-bold text-[#EAE8D9]">{TITLE.NAME}</h1>
          <div className="ml-[-50px]">
            <Suspense fallback={<div>Loading Typing Text...</div>}>
              <CustomTypingText />
            </Suspense>
          </div>
          <p className="mt-4 text-xl font-semibold text-[#A3A3A3]">
            {TITLE.DESCRIPTION}
            <span className="waving-hand" role="img" aria-label="waving hand">
              👋🏻
            </span>
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-6 gap-3"
          variants={fadeInUp}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Suspense fallback={<div>Loading Button...</div>}>
              <Button
                onClick={() => console.log("Download CV")}
                icon={<IconDownload size={24} />}
                className="bg-black text-white hover:bg-gray-800"
              >
                {BUTTONS.DOWNLOAD_CV}
              </Button>
            </Suspense>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Suspense fallback={<div>Loading Button...</div>}>
              <Button
                onClick={() => console.log("Contact Me")}
                icon={<IconChevronRight size={24} />}
                className="bg-white text-black hover:bg-gray-200"
              >
                {BUTTONS.CONTACT_ME}
              </Button>
            </Suspense>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeSection;
