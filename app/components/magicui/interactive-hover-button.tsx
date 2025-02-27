import React from "react";
import { cn } from "../../lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "inverted"
    | "primary"
    | "secondary"
    | "loadmore"; // Menambahkan lebih banyak varian
  icon?: React.ReactNode; // Ikon yang bisa dikustomisasi
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    { children, className, variant = "default", icon, onClick, ...props },
    ref
  ) => {
    // Definisikan warna berdasarkan variant
    const variantStyles = {
      default: {
        bg: "bg-white",
        text: "text-black",
        hoverBg: "hover:bg-black",
        hoverText: "hover:text-white",
        dot: "bg-black",
        hoverDot: "bg-black",
        hoverContent: "text-white",
      },
      inverted: {
        bg: "bg-black",
        text: "text-white",
        hoverBg: "hover:bg-white",
        hoverText: "hover:text-black",
        dot: "bg-white",
        hoverDot: "bg-white",
        hoverContent: "text-black",
      },
      primary: {
        bg: "bg-blue-500",
        text: "text-white",
        hoverBg: "hover:bg-blue-600",
        hoverText: "hover:text-white",
        dot: "bg-white",
        hoverDot: "bg-white",
        hoverContent: "text-white",
      },
      secondary: {
        bg: "bg-gray-200",
        text: "text-gray-800",
        hoverBg: "hover:bg-gray-300",
        hoverText: "hover:text-gray-900",
        dot: "bg-gray-800",
        hoverDot: "bg-gray-800",
        hoverContent: "text-gray-900",
      },
      loadmore: {
        bg: "bg-zinc-800",
        text: "text-white",
        hoverBg: "hover:bg-zinc-700",
        hoverText: "hover:text-white",
        dot: "bg-white",
        hoverDot: "bg-gray-400",
        hoverContent: "text-zinc-700",
      },
    };

    const styles = variantStyles[variant];

    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden rounded-full p-2 px-6 text-center font-semibold transition-colors duration-300",
          styles.bg,
          styles.text,
          styles.hoverBg,
          styles.hoverText,
          className
        )}
        onClick={onClick} // Menambahkan handler onClick
        {...props}
      >
        {/* Visible Content */}
        <div className="flex items-center gap-2">
          {/* Dot */}
          <div
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]",
              styles.dot
            )}
          ></div>
          {/* Text */}
          <span
            className={cn(
              "inline-block transition-all duration-300",
              "group-hover:translate-x-12 group-hover:opacity-0"
            )}
          >
            {children}
          </span>
        </div>

        {/* Hover Content */}
        <div
          className={cn(
            "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100",
            styles.hoverContent
          )}
        >
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
