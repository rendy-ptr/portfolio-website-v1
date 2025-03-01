"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer, CreateAnimation } from "../animations/animation";
import { PROJECTS } from "../constant/index";
import { CardBeam } from "../components/Cards/CardBeam";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { lucideIcons } from "../icon/lucide-icons";
import { usePathname } from "next/navigation";

const ProjectsSection: FC = () => {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer(0.5)}
      className="container py-16"
    >
      <motion.h1
        variants={CreateAnimation("left", 1.0)}
        className="text-4xl font-bold text-white mb-8"
      >
        {PROJECTS.TITLE}
      </motion.h1>
      <motion.div
        variants={CreateAnimation("up", 1.0)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {(isProjectsPage ? PROJECTS.LIST : PROJECTS.LIST.slice(0, 3)).map(
          (project, index) => (
            <CardBeam key={index} {...project} />
          )
        )}
      </motion.div>
      <motion.h1
        variants={CreateAnimation("up", 1.0)}
        className="text-4xl font-bold text-white text-center mt-8"
      >
        {PROJECTS.OTHER}
      </motion.h1>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        variants={CreateAnimation("up", 1.0)}
        className="flex items-center justify-center mt-4"
      >
        <InteractiveHoverButton
          variant="loadmore"
          icon={<lucideIcons.ArrowUpRight size={20} />}
          onClick={() => console.log("Load More Bisa!!")}
        >
          {PROJECTS.BUTTON}
        </InteractiveHoverButton>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
