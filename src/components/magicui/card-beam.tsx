"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { motion, type MotionStyle } from "framer-motion";
import type { BorderBeamProps } from "@/types/registry/registryType";

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
}: BorderBeamProps) => {
  // Calculate the full path length (0% to 100%)
  // Instead of animating from initialOffset-100 to initialOffset or vice versa,
  // we'll animate through the full 100% path and use initialOffset as a starting point
  const startPosition = initialOffset;
  const endPosition = startPosition + (reverse ? -100 : 100);

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${startPosition}%` }}
        animate={{ offsetDistance: `${endPosition}%` }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop", // This ensures a smooth loop without jumps
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};
