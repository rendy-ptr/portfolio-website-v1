import { ReactNode } from 'react';


type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  icon: ReactNode;
  className: string;
};

const Button = (props: ButtonProps) => {
  const { children, onClick, icon, className } = props;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 font-bold rounded-full shadow-md transition-colors duration-200 ${className}`}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;