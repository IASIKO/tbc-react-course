import React from "react";
import bg from "../../public/Assets/images/bg_1.jpg";
import Image from "next/image";

const TitleBgImage = ({ children }) => {
  return (
    <>
      <Image
        src={bg}
        alt="background image"
        className=" w-[100%] h-[450px] bg-cover bg-no-repeat relative"
      />
      <div className="h-[450px] absolute top-[38px] right-0 bottom-0 left-0 opacity-40 bg-black"></div>
      <h1 className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/4 text-white text-[70px] leading-tight font-normal">
        {children}
      </h1>
    </>
  );
};

export default TitleBgImage;
