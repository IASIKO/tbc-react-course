import React from "react";

const Button = ({ children }) => {
  return (
    <button className="cursor-pointer ml-[5px] bg-[#b7472a] border-[#b7472a] text-white rounded-md px-[15px]">
      {children}
    </button>
  );
};

export default Button;
