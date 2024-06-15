"use client";

import { useEffect, useRef, useState } from "react";
import aboutImg from "../../public/Assets/images/about-image.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ExperienceSection = () => {
  const [value, setValue] = useState(0);
  const t = useTranslations("about");
  const objRef = useRef<HTMLDivElement>(null);
  const start = 0;
  const end = 119;
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
      <div className="max-w-[1140px] px-[15px] flex flex-col lg:flex-row justify-center items-center m-auto">
        <Image
          src={aboutImg}
          alt="About Page thumbnail"
          className="h-[320px] sm:h-[620px] w-[100%] flex flex-wrap object-cover"
        />
        <div className="pl-[30px] py-[30px] lg:max-w-[50%] flex flex-[0_0_50%] flex-col animate-fade-in-up">
          <span className="text-red text-[21px] font-normal italic">
            {t("1905")}
          </span>
          <h2 className="text-[45px] font-bold text-black leading-normal dark:text-white">
            {t("title")}
          </h2>
          <p className="mb-[10px] dark:text-white">{t("body")}</p>
          <p className="text-[28px] text-white mb-[10px]">
            <strong
              className="italic text-red font-semibold tracking-widest"
              ref={objRef}
            >
              {value}{" "}
            </strong>
            <span className="text-black dark:text-white">
              {t("experience")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
