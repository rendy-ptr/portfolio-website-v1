"use client";

import type { FC } from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_ME } from "@/constant/index";

gsap.registerPlugin(ScrollTrigger);

const TextReveal: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const chars = containerRef.current!.querySelectorAll(".char");
      if (chars.length === 0) {
        return;
      }

      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        chars,
        { color: "#333333" },
        {
          color: "white",
          duration: isMobile ? 0.8 : 0.5,
          stagger: isMobile ? 0.008 : 0.02,
          ease: isMobile ? "power1.inOut" : "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: isMobile ? "top 90%" : "top 70%",
            end: isMobile ? "center 45%" : "center 60%",
            scrub: true,
            markers: false, // Ubah ke true untuk debugging
          },
        }
      );
    }, containerRef);

    const handleResize = () => {
      if (containerRef.current) {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert(); // Membersihkan semua animasi dalam context
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const createLetterSpans = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return (
          <span key={`space-${index}`} className="inline-block" style={{ whiteSpace: "pre" }}>
            {" "}
          </span>
        );
      }

      return (
        <span
          key={`char-${index}`}
          className="char inline-block"
          style={{
            willChange: "color",
            color: "#333333",
            fontFamily: "inherit",
            lineHeight: "1.8",
            fontSize: "clamp(0.85rem, 0.7rem + 0.8vw, 1.5rem)",
          }}>
          {char}
        </span>
      );
    });
  };

  return (
    <div ref={containerRef} className="w-full">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ whiteSpace: "pre-wrap" }}>
        {createLetterSpans(ABOUT_ME.DESC)}
      </motion.div>
    </div>
  );
};

export default TextReveal;
