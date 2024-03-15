import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-[21px] font-medium cursor-pointer ml-[5px] bg-[#b7472a] border-[#b7472a] text-white rounded-md px-[20px]">
      {children}
    </button>
  );
};

export default Button;
