"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../magicui/animated-beam";
import { Icons } from "@/icon/skill-icons";
import { SKILLS } from "@/constant/index";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-10 sm:size-12 md:size-16 items-center justify-center bg-transparent",
          className
        )}>
        {children}
      </div>
    );
  }
);

Circle.displayName = "Circle";

export function SkillBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const divRefHtml = useRef<HTMLDivElement>(null);
  const divRefCss = useRef<HTMLDivElement>(null);
  const divRefJavascript = useRef<HTMLDivElement>(null);
  const divRefSkills = useRef<HTMLDivElement>(null);
  const divRefTypescript = useRef<HTMLDivElement>(null);
  const divRefTailwind = useRef<HTMLDivElement>(null);
  const divRefReact = useRef<HTMLDivElement>(null);
  const divRefNextjs = useRef<HTMLDivElement>(null);
  const divRefPython = useRef<HTMLDivElement>(null);
  const divRefExpo = useRef<HTMLDivElement>(null);
  const divRefExpress = useRef<HTMLDivElement>(null);
  const divRefLaravel = useRef<HTMLDivElement>(null);
  const divRefPandas = useRef<HTMLDivElement>(null);
  const divRefMysql = useRef<HTMLDivElement>(null);
  const divRefMongodb = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-full mx-auto items-center justify-center overflow-hidden bg-transparent py-4 sm:py-8"
      ref={containerRef}>
      <div className="flex h-full w-full max-w-md sm:max-w-2xl lg:max-w-7xl flex-col items-stretch justify-between gap-4 sm:gap-6 md:gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefReact}>
            <Icons.react />
          </Circle>
          <Circle ref={divRefTypescript}>
            <Icons.typescript />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefNextjs}>
            <Icons.next />
          </Circle>
          <Circle ref={divRefPython}>
            <Icons.python />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefExpo}>
            <Icons.expo />
          </Circle>
          <Circle ref={divRefExpress}>
            <Icons.express />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefCss}>
            <Icons.css />
          </Circle>
          <Circle ref={divRefSkills}>
            <TextSkills />
          </Circle>
          <Circle ref={divRefJavascript}>
            <Icons.javascript />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefLaravel}>
            <Icons.laravel />
          </Circle>
          <Circle ref={divRefPandas}>
            <Icons.pandas />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefMysql}>
            <Icons.mysql />
          </Circle>
          <Circle ref={divRefMongodb}>
            <Icons.mongodb />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefTailwind}>
            <Icons.tailwind />
          </Circle>
          <Circle ref={divRefHtml}>
            <Icons.html />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefReact}
        toRef={divRefSkills}
        curvature={50}
        endYOffset={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefNextjs}
        toRef={divRefSkills}
        curvature={50}
        endYOffset={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefExpo}
        toRef={divRefSkills}
        curvature={50}
        endYOffset={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefCss}
        toRef={divRefSkills}
        curvature={0}
        endYOffset={0}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefLaravel}
        toRef={divRefSkills}
        curvature={-50}
        endYOffset={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefMysql}
        toRef={divRefSkills}
        curvature={-50}
        endYOffset={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefTailwind}
        toRef={divRefSkills}
        curvature={-50}
        endYOffset={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefTypescript}
        toRef={divRefSkills}
        curvature={50}
        endYOffset={5}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefPython}
        toRef={divRefSkills}
        curvature={50}
        endYOffset={5}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefExpress}
        toRef={divRefSkills}
        curvature={50}
        endYOffset={5}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefJavascript}
        toRef={divRefSkills}
        curvature={0}
        endYOffset={0}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefPandas}
        toRef={divRefSkills}
        curvature={-50}
        endYOffset={5}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefMongodb}
        toRef={divRefSkills}
        curvature={-50}
        endYOffset={5}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefHtml}
        toRef={divRefSkills}
        curvature={-50}
        endYOffset={5}
        reverse
      />
    </div>
  );
}

const TextSkills = () => {
  return (
    <div className="w-[20rem] sm:w-[24rem] md:w-[30rem] bg-[#27272a] p-4 sm:p-6 rounded-xl outline-2 outline-[#2c323c] flex items-center justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-gray-100 to-gray-600 bg-clip-text text-transparent">
        {SKILLS.TITLE_ANIMATED_BEAM}
      </h1>
    </div>
  );
};
