import React from "react";
import { cn } from "@/lib/utils";
import type { InteractiveHoverButtonProps } from "@/types/registry/registryType";
import { getButtonVariantStyles } from "@/utils/buttonVariantStyleUtils";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    {
      children,
      className,
      variant = "default",
      icon,
      onClick,
      rounded = true,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const styles = getButtonVariantStyles(variant);

    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden p-2 px-6 text-center font-semibold transition-colors duration-300",
          styles.bg,
          styles.text,
          styles.hoverBg,
          styles.hoverText,
          rounded ? "rounded-full" : "rounded-none",
          disabled ? "opacity-50 cursor-not-allowed" : "",
          className
        )}
        onClick={onClick}
        disabled={disabled}
        {...props}>
        {/* Visible Content */}
        <div className="flex items-center gap-2">
          {/* Dot */}
          <div
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]",
              styles.dot
            )}></div>
          {/* Text */}
          <span
            className={cn(
              "inline-block transition-all duration-300",
              "group-hover:translate-x-12 group-hover:opacity-0"
            )}>
            {children}
          </span>
        </div>

        {/* Hover Content */}
        <div
          className={cn(
            "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100",
            styles.hoverContent
          )}>
          <span>{children}</span>
          {icon &&
            React.cloneElement(icon as React.ReactElement, {
              className: cn("transition-all duration-300", styles.hoverContent),
            })}
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
