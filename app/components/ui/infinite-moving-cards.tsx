"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import type { InfiniteMovingCardsProps } from "@/types/registry/registryType";
import { lucideIcons } from "@/icon/lucide-icons";

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  // 🔹 Pindahkan getDirection & getSpeed ke atas sebelum digunakan
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const speedMap: Record<string, string> = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty("--animation-duration", speedMap[speed] || "40s");
    }
  }, [speed]);

  // 🔹 Gunakan useCallback untuk menghindari dependency warning
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]); // ✅ Tambahkan dependency

  // 🔹 Perbaiki useEffect dengan dependency
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="w-[30rem] max-w-full relative rounded-xl border border-[#2e3949] flex-shrink-0 shadow-[0_0_10px_#2e3949] px-6 py-6"
            style={{ background: "#27272a" }}
            key={idx}>
            <div className="flex flex-col gap-3 h-full">
              <h1 className="text-lg font-semibold text-white">{item.title}</h1>
              <p className="text-sm text-gray-400">{item.body}</p>
              <a
                href={item.link}
                className="text-xs text-gray-500 hover:text-gray-300 underline flex items-center gap-1 transition-colors duration-200">
                View Certificate
                <lucideIcons.ArrowUpRight size={12} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
