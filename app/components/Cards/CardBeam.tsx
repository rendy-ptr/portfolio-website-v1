import React, { useMemo } from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { lucideIcons } from "../../icon/lucide-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { BorderBeam } from "../magicui/card-beam";
import { PROJECTS } from "../../constant/index";

import { ProjectCardProps } from "../../types/registry/registryType";

export const CardBeam: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  techStack,
}) => {
  const randomDuration = useMemo(() => Math.random() * 4 + 6, []);
  const initialOffset = useMemo(() => Math.floor(Math.random() * 101), []);
  return (
    <Card className="relative w-[330px] rounded-xl overflow-hidden bg-zinc-900 border-transparent">
      <CardHeader>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardTitle className="mt-4 text-zinc-100">{title}</CardTitle>
        <CardDescription className="text-zinc-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1 bg-zinc-800 text-zinc-300"
            >
              <tech.icon className="w-4 h-4" />
              <span>{tech.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <InteractiveHoverButton
          variant="loadmore"
          icon={<lucideIcons.Github size={20} />}
          onClick={() => console.log("Load More Bisa!!")}
        >
          {PROJECTS.GITHUB}
        </InteractiveHoverButton>
      </CardFooter>
      <BorderBeam duration={randomDuration} size={50} initialOffset={initialOffset} />
    </Card>
  );
};
