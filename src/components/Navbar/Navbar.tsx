"use client";

import { NAVBAR } from "@/constant/index";
import { Sling as Hamburger } from "hamburger-react";
import type { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreateAnimation, staggerContainer } from "@/animations/animation";

const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="relative w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Title di pojok kiri atas */}
        <h1 className="absolute top-4 sm:top-5 left-4 sm:left-5 text-base sm:text-lg lg:text-xl font-bold cursor-pointer text-[#E0E0E0]">
          {NAVBAR.TITLE}
        </h1>

        {/* Hamburger di pojok kanan atas */}
        <div
          className="absolute top-4 sm:top-5 right-4 sm:right-5 lg:right-16 z-50 bg-[#E4E4E7] rounded-full shadow-md
           hover:outline-[#4f5052] hover:outline-[5px] sm:hover:outline-[7px] p-1 sm:p-1.5">
          <Hamburger toggled={isOpen} toggle={setOpen} color="black" size={18} />
        </div>
      </div>

      {/* Animasi Bubble Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 50%)" }}
            animate={{ clipPath: "circle(150% at 100% 50%)" }}
            exit={{ clipPath: "circle(0% at 100% 50%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[20rem] md:w-[24rem] lg:w-[30rem] bg-[#F5F5F5] z-40 flex flex-col justify-between shadow-lg px-4 sm:px-6 md:px-8 py-8 sm:py-10">
            {/* Navigation Title */}
            <div className="mt-12 sm:mt-16">
              <h2 className="text-black text-base sm:text-lg font-bold">Navigation</h2>
              <hr className="border-t border-gray-300 my-2" />
            </div>

            {/* Menu List */}
            <motion.ul
              variants={staggerContainer(0.2)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-black flex flex-col space-y-6 sm:space-y-8 md:space-y-12 text-xl sm:text-2xl md:text-3xl font-light flex-1 justify-center">
              {NAVBAR.TEXT_NAVIGATION.map((item, index) => (
                <motion.li
                  key={index}
                  variants={CreateAnimation("right", 0.5)}
                  className="cursor-pointer hover:opacity-75 relative pl-4 sm:pl-6 before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-black before:opacity-0 hover:before:opacity-100 transition-opacity"
                  onClick={() => {
                    const sectionId = item.toLowerCase().replace(/\s+/g, "-");
                    const section = document.getElementById(sectionId);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                    setOpen(false);
                  }}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* Links */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-black text-base sm:text-lg font-bold">Links</h2>
              <hr className="border-t border-gray-300 my-2" />
              <div className="text-black flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                {NAVBAR.TEXT_LINKS.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:opacity-75">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
