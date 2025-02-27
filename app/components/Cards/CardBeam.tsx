import React from "react";
import type { IconType } from "react-icons";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Github } from "lucide-react";
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

export interface TechStack {
  icon: IconType;
  name: string;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: TechStack[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  techStack,
}) => {
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
              {React.createElement(tech.icon, { className: "w-4 h-4" })}
              <span>{tech.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <InteractiveHoverButton
          variant="loadmore"
          icon={<Github size={20} />}
          onClick={() => console.log("Load More Bisa!!")}
        >
          Github
        </InteractiveHoverButton>
      </CardFooter>
      <BorderBeam duration={8} size={50} />
    </Card>
  );
};
