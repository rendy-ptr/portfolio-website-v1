import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import type { InteractiveHoverButtonProps } from "@/types/registry/registryType";

const Button: React.FC<InteractiveHoverButtonProps> = (props) => {
  return <InteractiveHoverButton {...props} />;
};

export default Button;
