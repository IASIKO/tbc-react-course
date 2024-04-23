import React from "react";

const Button = ({ children, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      style={{ width: width ? width : "" }}
      className="text-[21px] font-medium cursor-pointer ml-[5px] bg-[#b7472a] border-[#b7472a] text-white rounded-md px-[25px]"
    >
      {children}
    </button>
  );
};

export default Button;
