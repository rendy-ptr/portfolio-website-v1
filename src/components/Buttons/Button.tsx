// import { ReactNode } from 'react';


// type ButtonProps = {
//   children: ReactNode;
//   onClick: () => void;
//   icon: ReactNode;
//   className: string;
// };

// const Button = (props: ButtonProps) => {
//   const { children, onClick, icon, className } = props;
//   return (
//     <button
//       onClick={onClick}
//       className={`flex items-center gap-2 px-4 py-2 font-bold rounded-full shadow-md transition-colors duration-200 ${className}`}
//     >
//       {children}
//       {icon}
//     </button>
//   );
// };

// export default Button;

import React from "react";
import { InteractiveHoverButton } from "../../../@/components/magicui/buttons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: "dark" | "light";
}

const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, className, icon, variant = "light", ...props }, ref) => {
  return (
    <InteractiveHoverButton
      ref={ref}
      icon={icon}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </InteractiveHoverButton>
  );
});

Button.displayName = "Button";

export default Button;