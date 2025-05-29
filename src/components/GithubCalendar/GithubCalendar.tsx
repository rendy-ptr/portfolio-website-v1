import GitHubCalendar from "react-github-calendar";
import type React from "react";
import { useMemo, useState, useEffect } from "react";
import { BorderBeam } from "@/components/magicui/card-beam";

const GithubCalendar: React.FC = () => {
  const randomDuration = useMemo(() => Math.random() * 4 + 6, []);
  const initialOffset = useMemo(() => Math.floor(Math.random() * 101), []);

  // Responsive calendar settings
  const [calendarSettings, setCalendarSettings] = useState({
    blockSize: 15,
    blockMargin: 5,
    fontSize: 16,
    showWeekdayLabels: true,
  });

  useEffect(() => {
    const updateCalendarSettings = () => {
      const width = window.innerWidth;
      if (width < 480) {
        // Small Mobile
        setCalendarSettings({
          blockSize: 6,
          blockMargin: 1,
          fontSize: 10,
          showWeekdayLabels: false,
        });
      } else if (width < 640) {
        // Mobile
        setCalendarSettings({
          blockSize: 7,
          blockMargin: 1.5,
          fontSize: 11,
          showWeekdayLabels: false,
        });
      } else if (width < 1024) {
        // Tablet
        setCalendarSettings({
          blockSize: 12,
          blockMargin: 3,
          fontSize: 14,
          showWeekdayLabels: true,
        });
      } else {
        // Desktop
        setCalendarSettings({
          blockSize: 14,
          blockMargin: 5,
          fontSize: 15,
          showWeekdayLabels: true,
        });
      }
    };

    updateCalendarSettings();
    window.addEventListener("resize", updateCalendarSettings);
    return () => window.removeEventListener("resize", updateCalendarSettings);
  }, []);

  return (
    <div
      className="
      relative w-full max-w-full mx-auto rounded-2xl overflow-hidden
      bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800
      border border-zinc-800 hover:border-zinc-700
      p-2 xs:p-3 sm:p-5 lg:p-8
      transition-all duration-500 ease-out
      hover:shadow-2xl hover:shadow-cyan-300/20 hover:-translate-y-1
      group
    ">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-3 sm:gap-4 lg:gap-6">
        {/* Title Section */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <h2
            className="
            text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white
            leading-tight transition-all duration-300
            group-hover:text-cyan-300
            relative
          ">
            GitHub Activity
            {/* Accent line */}
            <div
              className="
              absolute -bottom-0.5 sm:-bottom-1 left-0 h-0.5 w-0
              bg-gradient-to-r from-cyan-400 to-blue-500
              group-hover:w-full transition-all duration-500 ease-out
            "></div>
          </h2>
          <p
            className="
            text-xs sm:text-sm lg:text-base text-zinc-400
            leading-relaxed transition-colors duration-300
            group-hover:text-zinc-300
          ">
            Daily contribution activity and coding patterns
          </p>
        </div>

        {/* Calendar Container */}
        <div
          className="
          flex justify-center items-center
          p-1 xs:p-2 sm:p-4 lg:p-6 rounded-xl
          bg-zinc-800/50 border border-zinc-700/50
          transition-all duration-300
          group-hover:bg-zinc-800/70 group-hover:border-zinc-600/50
          overflow-x-auto scrollbar-hide
          max-w-full
        ">
          <div
            className="
            text-gray-200 transition-all duration-300
            group-hover:text-gray-100
            min-w-fit mx-auto
            scale-90 xs:scale-95 sm:scale-100
          ">
            <GitHubCalendar
              username="rendy-ptr"
              blockSize={calendarSettings.blockSize}
              blockMargin={calendarSettings.blockMargin}
              fontSize={calendarSettings.fontSize}
              colorScheme="dark"
              showWeekdayLabels={calendarSettings.showWeekdayLabels}
            />
          </div>
        </div>

        {/* Footer with stats indicator */}
        <div className="flex items-center gap-2 pt-1 sm:pt-2">
          <div
            className="
            w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full
            bg-gradient-to-r from-cyan-400 to-blue-500
            opacity-60 group-hover:opacity-100 transition-opacity duration-300
          "></div>
          <p
            className="
            text-xs sm:text-sm text-zinc-500
            font-medium transition-colors duration-300
            group-hover:text-zinc-400
            truncate
          ">
            @rendy-ptr · GitHub Profile
          </p>
        </div>
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

      {/* Background pattern */}
      <div
        className="
        absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500
        bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]
      "></div>
    </div>
  );
};

export default GithubCalendar;
