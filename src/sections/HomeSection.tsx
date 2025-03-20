"use client";

import type { FC } from "react";
import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { TITLE, BUTTONS, CUSTOM_TYPING } from "@/constant/index";
import { CreateAnimation, staggerContainer } from "@/animations/animation";
import Button from "@/components/Buttons/Button";
import { lucideIcons } from "@/icon/lucide-icons";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import LanyardCard from "@/blocks/Components/Lanyard/Lanyard";

const HomeSection: FC = () => {
  const LanyardCardRef = useRef(null);
  const isInView = useInView(LanyardCardRef, { once: false, amount: 0.5 });

  // Gunakan useMemo agar LanyardCard hanya dibuat sekali, tidak setiap re-render
  const memoizedLanyardCard = useMemo(() => <LanyardCard debug={false} />, []);

  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="flex items-center justify-center min-h-[110vh] overflow-visible py-16 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      {/* Container utama dengan flex-row */}
      <div className="flex w-full max-w-7xl">
        {/* Kolom kiri: Profil, teks, dan tombol */}
        <motion.div
          variants={CreateAnimation("up", 1.2)}
          className="flex flex-col items-start justify-center w-1/2 space-y-5 text-left">
          {/* Judul */}
          <motion.h1
            variants={CreateAnimation("up", 1.2)}
            className="text-4xl font-semibold text-white">
            {TITLE.TEXT}
          </motion.h1>
          <motion.h1
            variants={CreateAnimation("up", 1.2)}
            className="text-5xl font-bold text-white">
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
            className="text-2xl font-semibold text-white">
            {TITLE.DESCRIPTION}
            <span className="waving-hand" role="img" aria-label="waving hand">
              👋🏻
            </span>
          </motion.p>

          {/* Tombol */}
          <motion.div variants={CreateAnimation("up", 1.2)} className="flex justify-start gap-3">
            <Button
              variant="default"
              icon={<lucideIcons.Download size={20} />}
              onClick={() => alert("Download Bisa!!!")}
              rounded={true}>
              {BUTTONS.DOWNLOAD_CV}
            </Button>
            <Button
              variant="inverted"
              icon={<lucideIcons.ChevronRight size={20} />}
              onClick={() => alert("Contact Me Bisa!!!!")}
              rounded={true}>
              {BUTTONS.CONTACT_ME}
            </Button>
          </motion.div>
        </motion.div>

        {/* Kolom kanan: Card3d */}
        <motion.div ref={LanyardCardRef} className="w-1/2 flex items-center justify-center">
          {isInView && memoizedLanyardCard}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
