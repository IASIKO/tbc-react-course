"use client";

import { useEffect, useRef, useState } from "react";
import aboutImg from "../../public/Assets/images/about-image.jpg";

const ExperienceSection = () => {
  const [value, setValue] = useState(0);
  const objRef = useRef<HTMLDivElement>(null);
  const start = 0;
  const end = 115;
  const duration = 3000;

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return (
    <section className="py-[60px] relative dark:bg-gray">
      <div className="max-w-[1140px] px-[15px] flex justify-center items-center m-auto">
        <div
          style={{ backgroundImage: `url(${aboutImg.src})` }}
          className="h-[620px] w-[100%] flex flex-wrap  bg-cover bg-no-repeat bg-center "
        ></div>
        <div className="pl-[30px] py-[30px] max-w-[50%] flex flex-[0_0_50%] flex-col animate-[fall_2s_ease_100ms]">
          <span className="text-red text-[21px] font-normal italic">
            Since 1905
          </span>
          <h2 className="text-[45px] font-bold text-black leading-normal">
            Desire Meets A New Taste
          </h2>
          <p className="mb-[10px] dark:text-white">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p className="mb-[10px] dark:text-white">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            and and the Little Blind Text should turn around and return to its
            own, safe country.
          </p>
          <p className="text-[28px] text-black mb-[10px]">
            <strong
              className="italic text-red font-semibold tracking-widest"
              ref={objRef}
            >
              {value}{" "}
            </strong>
            <span>Years of Experience In Business</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
