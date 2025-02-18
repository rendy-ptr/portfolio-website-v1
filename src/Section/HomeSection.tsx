import type React from "react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TITLE, BUTTONS, CUSTOM_TYPING } from "../constant/index";
import { CreateAnimation, staggerContainer } from "../Animations/animation";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { ChevronRight, Download } from "lucide-react";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import Badge from "@/blocks/Components/Lanyard/Lanyard";




const HomeSection: React.FC = () => {
    const [isBadgeVisible, setIsBadgeVisible] = useState(false);
    const badgeRef = useRef(null);
    const isInView = useInView(badgeRef, { once: false, amount: 0.5 });
  
    if (isInView && !isBadgeVisible) {
      setIsBadgeVisible(true);
    } else if (!isInView && isBadgeVisible) {
      setIsBadgeVisible(false);
    }

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={staggerContainer(0.5)}
        className="flex items-center justify-center min-h-screen z-10 container py-16 px-8"
      >
        {/* Container utama dengan flex-row */}
        <div className="flex w-full max-w-7xl">
          {/* Kolom kiri: Profil, teks, dan tombol */}
          <motion.div
            variants={CreateAnimation("up", 1.2)}
            className="flex flex-col items-start justify-center w-1/2 space-y-6 text-left"
          >
            {/* Judul */}
            <motion.h1
              variants={CreateAnimation("up", 1.2)}
              className="text-6xl font-semibold text-[#D6D6D6]"
            >
              {TITLE.TEXT}
            </motion.h1>
            <motion.h1
              variants={CreateAnimation("up", 1.2)}
              className="text-7xl font-bold text-[#EAE8D9]"
            >
              {TITLE.NAME}
            </motion.h1>

            {/* Typing Text */}
            <motion.div variants={CreateAnimation("up", 1.2)}>
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
            </motion.div>

            {/* Deskripsi */}
            <motion.p
              variants={CreateAnimation("up", 1.2)}
              className="text-2xl font-semibold text-[#A3A3A3]"
            >
              {TITLE.DESCRIPTION}
              <span className="waving-hand" role="img" aria-label="waving hand">
                👋🏻
              </span>
            </motion.p>

            {/* Tombol */}
            <motion.div
              variants={CreateAnimation("up", 1.2)}
              className="flex justify-start gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <InteractiveHoverButton
                  variant="default"
                  icon={<Download size={20} />}
                  onClick={() => console.log("Download")}
                >
                  {BUTTONS.DOWNLOAD_CV}
                </InteractiveHoverButton>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
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
          <motion.div
            ref={badgeRef}
            className="flex items-center justify-center w-1/2"
          >
            {isBadgeVisible && <Badge debug={false} />}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeSection;
