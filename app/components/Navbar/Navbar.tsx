"use client";

import { NAVBAR } from "../../constant/index";
import { Sling as Hamburger } from "hamburger-react";
import { useState, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="relative w-full">
        {/* Title di pojok kiri atas */}
        <h1 className="absolute top-5 left-5 sm:text-lg xl:text-xl text-lg font-bold cursor-pointer text-[#E0E0E0]">
          {NAVBAR.TITLE}
        </h1>

        {/* Hamburger di pojok kanan atas */}
        <div className="absolute top-5 right-5 z-50 bg-white rounded-full shadow-md">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="black"
            size={20}
          />
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
            className="fixed top-0 right-0 h-screen w-[20rem] bg-[#F5F5F5] z-40 flex flex-col justify-between shadow-lg px-8 py-10"
          >
            {/* Navigation Title */}
            <div className="mt-12">
              <h2 className="text-black text-lg font-bold">Navigation</h2>
              <hr className="border-t border-gray-300 my-2" />
            </div>

            {/* Menu List */}
            <ul className="text-black flex flex-col space-y-12 text-3xl font-light flex-1 justify-center">
              {NAVBAR.TEXT_NAVIGATION.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:opacity-75 relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-black before:opacity-0 hover:before:opacity-100 transition-opacity"
                  onClick={() => {
                    const sectionId = item.toLowerCase().replace(/\s+/g, "-"); // Ubah teks ke format ID
                    const section = document.getElementById(sectionId);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="mb-12">
              <h2 className="text-black text-lg font-bold">Links</h2>
              <hr className="border-t border-gray-300 my-2" />
              <div className="text-black flex gap-2 text-xs">
                {NAVBAR.TEXT_LINKS.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:opacity-75"
                  >
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
