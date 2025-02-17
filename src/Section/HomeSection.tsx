import type React from "react";
// import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { TITLE, BUTTONS, CUSTOM_TYPING } from "../constant/index";
import { CreateAnimation, staggerContainer } from "../Animations/animation";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { ChevronRight, Download } from "lucide-react";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import Lanyard from "@/blocks/Components/Lanyard/Lanyard";

// const CustomTypingText = lazy(
//   () => import("../components/CustomTypingText/CustomTypingText")
// );import LanyardCanvas from './../blocks/Components/Lanyard/LanyardCanvas';


const HomeSection: React.FC = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={staggerContainer(0.5)}
        className="flex items-center justify-center min-h-screen z-10 container py-16 px-16" // Tambahkan px-8 untuk margin horizontal
      >
        {/* Container utama dengan flex-row */}
        <div className="flex w-full max-w-7xl">
          {/* Kolom kiri: Profil, teks, dan tombol */}
          <motion.div
            variants={CreateAnimation("up", 1.0)}
            className="flex flex-col items-start justify-center w-1/2 space-y-6 text-left"
          >
            {/* Judul */}
            <h1 className="text-6xl font-semibold text-[#D6D6D6]">
              {TITLE.TEXT}
            </h1>
            <h1 className="text-7xl font-bold text-[#EAE8D9]">{TITLE.NAME}</h1>

            {/* Typing Text */}
            <div className="">
              <RotatingText
                texts={CUSTOM_TYPING.ROLES}
                prefix={CUSTOM_TYPING.TEXT}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-2 justify-center rounded-xl text-3xl font-semibold"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            {/* Deskripsi */}
            <p className="text-2xl font-semibold text-[#A3A3A3]">
              {TITLE.DESCRIPTION}
              <span className="waving-hand" role="img" aria-label="waving hand">
                👋🏻
              </span>
            </p>

            {/* Tombol */}
            <motion.div
              className="flex justify-start gap-3"
              variants={CreateAnimation("up", 1.0)}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <InteractiveHoverButton
                  variant="default"
                  icon={<Download size={20} />}
                  onClick={() => console.log("Download")}
                >
                  {BUTTONS.DOWNLOAD_CV}
                </InteractiveHoverButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <InteractiveHoverButton
                  variant="inverted"
                  icon={<ChevronRight size={20} />}
                  onClick={() => console.log("Inverted Button")}
                >
                  {BUTTONS.CONTACT_ME}
                </InteractiveHoverButton>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Kolom kanan: Card3d */}
          <div className="flex items-center justify-center w-1/2">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeSection;
