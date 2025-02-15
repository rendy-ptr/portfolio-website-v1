import React from "react";
import { cn } from "../../lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: "dark" | "light";
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    { children, className, icon, variant = "light", onClick, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden rounded-full p-2 px-6 text-center font-semibold transition-colors focus:outline-none",
          variant === "dark"
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-white text-black hover:bg-gray-800 hover:text-white",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]",
              variant === "dark" ? "bg-white" : "bg-black"
            )}
          ></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div
          className={cn(
            "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100",
            variant === "dark" ? "text-black" : "text-white"
          )}
        >
          <span>{children}</span>
          {icon && (
            <span
              className={cn(variant === "dark" ? "text-black" : "text-white")}
            >
              {icon}
            </span>
          )}
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
