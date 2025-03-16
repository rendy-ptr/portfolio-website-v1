import type { Transition, Target, motion } from "framer-motion";
import type { IconType } from "react-icons";
import type { Texture } from "three";
import type { RefObject } from "react";

// REGISTRY TYPE
export interface CustomMeshLineMaterialProps {
  color?: string;
  depthTest?: boolean;
  useMap?: boolean;
  map?: Texture;
  repeat?: [number, number];
  lineWidth?: number;
}

export const segmentProps = {
  type: "dynamic",
  canSleep: true,
  colliders: false,
  angularDamping: 2,
  linearDamping: 2,
} as const;

export interface LoadingScreenProps {
  onComplete: () => void;
}

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

export type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export interface InteractiveHoverButtonProps {
  variant: "default" | "inverted" | "primary" | "secondary" | "loadmore";
  icon: React.ReactNode;
  rounded: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  prefix?: string;
  transition?: Transition;
  initial?: Target;
  animate?: Target;
  exit?: Target;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

export interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: { icon: IconType; name: string }[];
  github_url: string;
}

export interface InfiniteMovingCardsProps {
  items: {
    title: string;
    publisher: string;
    body: string;
    link: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | "verySlow";
  pauseOnHover?: boolean;
  className?: string;
}
