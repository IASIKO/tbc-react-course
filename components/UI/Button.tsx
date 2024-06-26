import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, width, isDisabled = false }) => {
  return (
    <button
      onClick={onClick}
      style={{ width: width ? width : "" }}
      disabled={isDisabled}
      className="text-[21px] font-medium cursor-pointer bg-red border-red text-white rounded-md px-[15px] flex items-center justify-center gap-2 dark:bg-dark dark:border-dark select-none bg-gradient-to-tr from-gray-900 to-gray-800 text-center align-middle  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      {children}
    </button>
  );
};

export default Button;
