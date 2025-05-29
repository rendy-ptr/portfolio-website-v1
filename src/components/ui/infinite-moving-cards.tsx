"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback, useMemo } from "react";
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

  const itemsWithRandomValues = useMemo(() => {
    return items.map((item) => ({
      ...item,
      randomDuration: Math.random() * 4 + 6,
      initialOffset: Math.floor(Math.random() * 101),
    }));
  }, [items]);

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
        fast: "15s",
        normal: "30s",
        slow: "60s",
        verySlow: "80s",
      };
      containerRef.current.style.setProperty("--animation-duration", speedMap[speed] || "30s");
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (scrollerRef.current) {
      if (scrollerRef.current.children.length > items.length) return;

      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed, items.length]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 sm:gap-6 md:gap-8 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {itemsWithRandomValues.map((item, idx) => {
          return (
            <li
              className="
                relative w-[18rem] sm:w-[24rem] md:w-[28rem] lg:w-[30rem] max-w-full
                rounded-2xl overflow-hidden flex-shrink-0
                bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800
                border border-zinc-800 hover:border-zinc-700
                px-5 sm:px-6 py-5 sm:py-6
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-cyan-300/20 hover:-translate-y-1
                group/card
              "
              key={idx}
              style={{
                animationDelay: `${item.randomDuration}s`,
              }}>
              <div className="relative z-10 flex flex-col gap-3 sm:gap-4 h-full">
                <div className="flex items-start gap-3">
                  <div
                    className="w-1 h-6 sm:h-8 bg-gradient-to-b from-cyan-400 to-blue-500
                    rounded-full flex-shrink-0 mt-1
                    group-hover/card:from-cyan-300 group-hover/card:to-blue-400
                    transition-colors duration-300"></div>
                  <h1
                    className="text-base sm:text-lg md:text-xl font-bold text-white
                    leading-tight group-hover/card:text-cyan-300
                    transition-colors duration-300">
                    {item.title}
                  </h1>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <div
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500
                    opacity-60 group-hover/card:opacity-100
                    transition-opacity duration-300"></div>
                  <h5
                    className="text-xs sm:text-sm text-zinc-300 font-medium
                    group-hover/card:text-cyan-200
                    transition-colors duration-300">
                    {item.publisher}
                  </h5>
                </div>

                <p
                  className="text-xs sm:text-sm text-zinc-400 leading-relaxed ml-4
                  group-hover/card:text-zinc-300
                  transition-colors duration-300 line-clamp-3">
                  {item.body}
                </p>

                <div className="mt-auto ml-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-xs sm:text-sm text-zinc-500
                      hover:text-cyan-400 font-medium
                      transition-all duration-300
                      group/link
                      px-3 py-1.5 rounded-lg
                      bg-zinc-800/50 hover:bg-zinc-700/50
                      border border-zinc-700/30 hover:border-cyan-500/50
                    ">
                    <span>View Certificate</span>
                    <lucideIcons.ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:rotate-45 group-hover/link:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/0 via-blue-600/0 to-purple-600/0
                group-hover/card:from-cyan-600/20 group-hover/card:via-blue-600/20 group-hover/card:to-purple-600/20
                rounded-2xl blur-sm -z-10 transition-all duration-500"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
