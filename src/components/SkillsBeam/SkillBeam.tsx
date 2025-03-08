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
          "z-10 w-full flex size-12 items-center justify-center bg-transparent",
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
      className="relative flex w-full mx-auto items-center justify-center overflow-hidden bg-transparent"
      ref={containerRef}>
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefReact} className="size-16">
            <Icons.react />
          </Circle>
          <Circle ref={divRefTypescript} className="size-16">
            <Icons.typescript />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefNextjs} className="size-16">
            <Icons.next />
          </Circle>
          <Circle ref={divRefPython} className="size-16">
            <Icons.python />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefExpo} className="size-16">
            <Icons.expo />
          </Circle>
          <Circle ref={divRefExpress} className="size-16">
            <Icons.express />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefCss} className="size-16">
            <Icons.css />
          </Circle>
          <Circle ref={divRefSkills} className="size-16">
            <TextSkills />
          </Circle>
          <Circle ref={divRefJavascript} className="size-16">
            <Icons.javascript />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefLaravel} className="size-16">
            <Icons.laravel />
          </Circle>
          <Circle ref={divRefPandas} className="size-16">
            <Icons.pandas />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefMysql} className="size-16">
            <Icons.mysql />
          </Circle>
          <Circle ref={divRefMongodb} className="size-16">
            <Icons.mongodb />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={divRefTailwind} className="size-16">
            <Icons.tailwind />
          </Circle>
          <Circle ref={divRefHtml} className="size-16">
            <Icons.html />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefReact}
        toRef={divRefSkills}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefNextjs}
        toRef={divRefSkills}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefExpo}
        toRef={divRefSkills}
        curvature={75}
        endYOffset={10}
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
        curvature={-75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefMysql}
        toRef={divRefSkills}
        curvature={-75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefTailwind}
        toRef={divRefSkills}
        curvature={-75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefTypescript}
        toRef={divRefSkills}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefPython}
        toRef={divRefSkills}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefExpress}
        toRef={divRefSkills}
        curvature={75}
        endYOffset={10}
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
        curvature={-75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefMongodb}
        toRef={divRefSkills}
        curvature={-75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divRefHtml}
        toRef={divRefSkills}
        curvature={-75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
const TextSkills = () => {
  return (
    <div className="w-[30rem] bg-[#27272a] p-6 rounded-xl outline outline-1 outline-[#2e3949] shadow-[0_0_10px_#2e3949] flex items-center justify-center">
      <h1 className="text-6xl font-bold bg-gradient-to-b from-gray-100 to-gray-600 bg-clip-text text-transparent">
        {SKILLS.TITLE_ANIMATED_BEAM}
      </h1>
    </div>
  );
};
