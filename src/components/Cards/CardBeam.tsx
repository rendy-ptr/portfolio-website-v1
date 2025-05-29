import React, { useMemo } from "react";
import Button from "@/components/Buttons/Button";
import { lucideIcons } from "@/icon/lucide-icons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { BorderBeam } from "../magicui/card-beam";
import { PROJECTS } from "@/constant/index";
import Image from "next/image";

import type { ProjectCardProps } from "../../types/registry/registryType";

export const CardBeam: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  techStack,
  github_url,
}) => {
  const randomDuration = useMemo(() => Math.random() * 4 + 6, []);
  const initialOffset = useMemo(() => Math.floor(Math.random() * 101), []);

  return (
    <Card
      className="
      relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden
      bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800
      border border-zinc-800 hover:border-zinc-700
      transition-all duration-500 ease-out
      hover:shadow-2xl hover:shadow-cyan-300/20 hover:-translate-y-2
      group
    ">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="aspect-video w-full overflow-hidden bg-zinc-800">
          <Image
            src={image || "/placeholder.svg"}
            width={400}
            height={225}
            alt={title}
            className="
              w-full h-full object-cover
              transition-all duration-700 ease-out
              group-hover:scale-110 group-hover:brightness-110
              group-hover:contrast-105
            "
            priority={false}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <CardHeader className="p-4 sm:p-5">
        <CardTitle
          className="
          text-base sm:text-lg font-bold text-white
          leading-tight line-clamp-2 mb-2
          group-hover:text-cyan-300 transition-colors duration-300
        ">
          {title}
        </CardTitle>
        <CardDescription
          className="
          text-xs sm:text-sm text-zinc-400 leading-relaxed
          line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300
        ">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Tech Stack */}
      <CardContent className="px-4 sm:px-5 pb-4">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {techStack.slice(0, 4).map(
            (
              tech,
              index // Limit to 4 badges on mobile
            ) => (
              <Badge
                key={index}
                variant="secondary"
                className="
                flex items-center gap-1 px-2 py-1
                bg-zinc-800/80 hover:bg-zinc-700/80
                text-zinc-300 border border-zinc-700/50
                cursor-pointer transition-all duration-300
                hover:scale-105 hover:text-cyan-300
                text-xs font-medium
              ">
                <tech.icon className="w-3 h-3 flex-shrink-0" />
                <span className="whitespace-nowrap">{tech.name}</span>
              </Badge>
            )
          )}
          {techStack.length > 4 && (
            <Badge
              variant="secondary"
              className="
                px-2 py-1 bg-zinc-800/60 text-zinc-400 border border-zinc-700/30
                text-xs font-medium cursor-default
              ">
              +{techStack.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 sm:p-5 pt-0">
        <a href={github_url} target="_blank" rel="noopener noreferrer" className="w-full group/btn">
          <Button
            variant="loadmore"
            icon={
              <lucideIcons.Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
            }
            rounded={true}
            className="
              w-full px-4 py-2.5 text-sm font-medium
              bg-gradient-to-r from-zinc-800 to-zinc-700
              hover:from-zinc-700 hover:to-zinc-600
              border border-zinc-700 hover:border-zinc-600
              text-zinc-300 hover:text-white
              shadow-lg hover:shadow-xl
              transition-all duration-300
              group-hover/btn:scale-105
            ">
            <span className="flex items-center justify-center gap-2">
              <lucideIcons.Github className="w-4 h-4" />
              {PROJECTS.GITHUB}
            </span>
          </Button>
        </a>
      </CardFooter>

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
    </Card>
  );
};
