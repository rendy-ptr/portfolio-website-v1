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
    <Card className="relative w-[350px] rounded-xl overflow-hidden bg-zinc-900 border-transparent">
      {/* Cyan glow effect at the bottom of the entire card */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-customPulse" /> */}
      <CardHeader>
        <div className="overflow-hidden rounded-t-xl group">
          <Image
            src={image || "/placeholder.svg"}
            width={350}
            height={192}
            alt={title}
            className="
              w-full h-48 object-cover rounded-t-xl mb-6
              transition-all duration-500 ease-in-out
              group-hover:brightness-90 cursor-pointer
              group-hover:shadow-lg group-hover:shadow-cyan-300/70
            "
          />
        </div>

        <CardTitle className="mt-4 text-zinc-100">{title}</CardTitle>
        <CardDescription className="text-zinc-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1 bg-zinc-800 text-zinc-300 cursor-pointer">
              <div className="flex items-center gap-2 my-1 mx-1">
                <tech.icon className="w-4 h-4" />
                <span>{tech.name}</span>
              </div>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href={github_url} target="_blank" rel="noopener noreferrer">
          <Button variant="loadmore" icon={<lucideIcons.Github size={20} />} rounded={true}>
            {PROJECTS.GITHUB}
          </Button>
        </a>
      </CardFooter>
      <BorderBeam duration={randomDuration} size={50} initialOffset={initialOffset} />
    </Card>
  );
};
