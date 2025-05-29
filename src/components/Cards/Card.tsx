import type { CustomCardProps } from "@/types/custom/appType";
import type React from "react";
import { useMemo } from "react";
import { BorderBeam } from "@/components/magicui/card-beam";

const CustomCard: React.FC<CustomCardProps> = ({ experience }) => {
  const randomDuration = useMemo(() => Math.random() * 4 + 6, []);
  const initialOffset = useMemo(() => Math.floor(Math.random() * 101), []);

  return (
    <div
      className="
      relative w-full max-w-full mx-auto rounded-2xl overflow-hidden
      bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800
      border border-zinc-800 hover:border-zinc-700
      p-5 sm:p-6 lg:p-8
      transition-all duration-500 ease-out
      hover:shadow-2xl hover:shadow-cyan-300/20 hover:-translate-y-1
      group
    ">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
        {experience.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col gap-3 sm:gap-4 break-words
              pb-6 sm:pb-8 last:pb-0
              border-b border-zinc-800/50 last:border-b-0
              transition-all duration-300
              group-hover:border-zinc-700/50
            ">
            {/* Title */}
            <h1
              className="
              text-base sm:text-lg lg:text-xl font-bold text-white
              leading-tight transition-all duration-300
              group-hover:text-cyan-300
              relative
            ">
              {item.title}
              {/* Accent line */}
              <div
                className="
                absolute -bottom-1 left-0 h-0.5 w-0
                bg-gradient-to-r from-cyan-400 to-blue-500
                group-hover:w-full transition-all duration-500 ease-out
              "></div>
            </h1>

            {/* Body */}
            <p
              className="
              text-xs sm:text-sm lg:text-base text-zinc-400
              leading-relaxed transition-colors duration-300
              group-hover:text-zinc-300
            ">
              {item.body}
            </p>

            {/* Footer with enhanced styling */}
            <div className="flex items-center gap-2">
              <div
                className="
                w-2 h-2 rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                opacity-60 group-hover:opacity-100 transition-opacity duration-300
              "></div>
              <p
                className="
                text-xs sm:text-sm text-zinc-500
                font-medium transition-colors duration-300
                group-hover:text-zinc-400
              ">
                {item.footer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Border */}
      <BorderBeam
        duration={randomDuration}
        size={60}
        initialOffset={initialOffset}
        className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Subtle glow effect */}
      <div
        className="
        absolute -inset-0.5 bg-gradient-to-r from-cyan-600/0 via-blue-600/0 to-purple-600/0
        group-hover:from-cyan-600/20 group-hover:via-blue-600/20 group-hover:to-purple-600/20
        rounded-2xl blur-sm -z-10 transition-all duration-500
      "></div>

      {/* Background pattern (optional) */}
      <div
        className="
        absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500
        bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]
      "></div>
    </div>
  );
};

export default CustomCard;
