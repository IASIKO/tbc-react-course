import React from "react";

const LandingContent = () => {
  return (
    <main>
      <div className=" w-[100%] h-[100vh] bg-landing-bgImage bg-center bg-cover bg-no-repeat relative z-0">
        <div className="absolute top-0 right-0 bottom-0 left-0 opacity-40 bg-black"></div>
        <h1 className="textStroke absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[90px] leading-tight font-bold italic">
          <div className="py-[30px] rotate-[-4deg] text-center w-[660px] m-auto">
            Good <span className="text-white">Drink</span> for Good{" "}
            <span className="text-white">Moments</span>.
            <p className="font-normal text-[20px] text-[#ffffff] py-[20px] leading-normal">
              <a
                href="#"
                className="cursor-pointer mr-[10px] bg-[#b7472a] border-[#b7472a] text-white rounded-[3px] py-[5px] px-[15px]"
              >
                Shop Now
              </a>
              <a
                href="#"
                className="cursor-pointer mr-[10px] bg-transparent border-white border-[1px] border-solid text-white rounded-[3px] py-[5px] px-[15px]"
              >
                Read more
              </a>
            </p>
          </div>
        </h1>
      </div>
    </main>
  );
};

export default LandingContent;
