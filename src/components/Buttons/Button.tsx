import { FC, ReactNode } from 'react';


type ButtonProps = {
  text: string;
  onClick: () => void;
  icon: ReactNode;
  className: string;
};

const Button: FC<ButtonProps> = ({ text, onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 font-bold rounded-full shadow-md transition-colors duration-200 ${className}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;