"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_ME } from "../../constant/index";

gsap.registerPlugin(ScrollTrigger);

const TextReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  // const text = `Hi there! 👋 I'm Afrizal Mufriz Fouji, I'm currently living in Bandung, Indonesia. I bring over 3 years of experience as a versatile Frontend Developer, I'm skilled at creating, developing, and managing complex websites, with a specialization in Reactjs and Nextjs. As a self-taught developer, I am driven by a passion for creating engaging and interactive websites. I am not just a coder but also a creative thinker, problem solver, and a perpetual learner, always eager to explore new technologies. Embracing a non-traditional path, I chose hands-on learning and real-world applications over the traditional university route, which has cultivated resilience and adaptability in my approach. I'm also a content creator on Tiktok and Instagram soon on Youtube, where I share my knowledge and experience in web development. I'm currently working as a Front-end Developer at PT Pemuda Inovasi Teknologi (Chatbiz) until now. I'm always open to new opportunities and collaborations, so feel free to reach out to me! 🚀`;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll(".char");

    if (chars) {
      gsap.fromTo(
        chars,
        {
          color: "#333333",
        },
        {
          color: "white",
          duration: 0.5,
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
            markers: false,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const createLetterSpans = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return (
          <span
            key={`space-${index}`}
            className="inline-block"
            style={{ whiteSpace: "pre" }}
          >
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
            fontSize: "1.5rem",
          }}
        >
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
        style={{ whiteSpace: "pre-wrap" }}
      >
        {createLetterSpans(ABOUT_ME.DESC)}
      </motion.div>
    </div>
  );
};

export default TextReveal;
