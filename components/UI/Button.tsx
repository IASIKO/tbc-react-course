import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      style={{ width: width ? width : "" }}
      className="text-[21px] font-medium cursor-pointer bg-[#b7472a] border-[#b7472a] text-white rounded-md px-[15px] flex items-center justify-center gap-4 dark:bg-dark dark:border-dark"
    >
      {children}
    </button>
  );
};

export default Button;
