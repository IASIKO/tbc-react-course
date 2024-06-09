import React, { ReactNode } from "react";
import bg from "../../public/Assets/images/test.jpg";

interface TitleBgImageProps {
  children: ReactNode;
}

const TitleBgImage: React.FC<TitleBgImageProps> = ({ children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" w-[100%] h-[200px] sm:h-[300px] object-right-bottom relative"
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 opacity-40 bg-black"></div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[40px] sm:text-[70px] leading-tight font-normal">
        {children}
      </h1>
    </div>
  );
};

export default TitleBgImage;
