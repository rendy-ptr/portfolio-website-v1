"use client";

import { useEffect, useRef, FC } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_ME } from "../../constant/index";

gsap.registerPlugin(ScrollTrigger);

const TextReveal: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

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
            start: "top 75%",
            end: "bottom 75%",
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
