// utils/buttonVariants.ts
import type { InteractiveHoverButtonProps } from "@/types/registry/registryType";

export const getButtonVariantStyles = (
  variant: NonNullable<InteractiveHoverButtonProps["variant"]>
) => {
  const variantStyles = {
    default: {
      bg: "bg-white",
      text: "text-black",
      hoverBg: "lg:hover:bg-black",
      hoverText: "lg:hover:text-white",
      dot: "bg-black",
      hoverDot: "bg-black",
      hoverContent: "text-white",
    },
    inverted: {
      bg: "bg-black",
      text: "text-white",
      hoverBg: "lg:hover:bg-white",
      hoverText: "lg:hover:text-black",
      dot: "bg-white",
      hoverDot: "bg-white",
      hoverContent: "text-black",
    },
    primary: {
      bg: "bg-blue-500",
      text: "text-white",
      hoverBg: "lg:hover:bg-blue-600",
      hoverText: "lg:hover:text-white",
      dot: "bg-white",
      hoverDot: "bg-white",
      hoverContent: "text-white",
    },
    secondary: {
      bg: "bg-gray-200",
      text: "text-gray-800",
      hoverBg: "lg:hover:bg-gray-300",
      hoverText: "lg:hover:text-gray-900",
      dot: "bg-gray-800",
      hoverDot: "bg-gray-800",
      hoverContent: "text-gray-900",
    },
    loadmore: {
      bg: "bg-zinc-800",
      text: "text-white",
      hoverBg: "lg:hover:bg-zinc-700",
      hoverText: "lg:hover:text-white",
      dot: "bg-white",
      hoverDot: "bg-gray-400",
      hoverContent: "text-zinc-700",
    },
  };

  return variantStyles[variant] || variantStyles.default;
};
