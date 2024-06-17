"use client";

import { useRouter } from "next/navigation";
import { setLanguage } from "../../lib/actions";
import { useLocale } from "next-intl";
import ge from "../../public/Assets/images/ge.svg";
import gb from "../../public/Assets/images/gb.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const Language = () => {
  const router = useRouter();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);

  const langHandleClick = (lang: string) => {
    setLanguage(lang);
    setCurrentLocale(lang);
    router.refresh();
  };

  // Update currentLocale if locale changes
  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  return (
    <div className="duration-100 flex gap-2 items-center justify-center">
      <div className={currentLocale === "en" ? "text-yellow" : "text-white"}>
        <button
          type="button"
          onClick={() => langHandleClick("en")}
          className="flex items-center"
        >
          <Image src={gb} alt="United Kingdom flag" width={28} height={21} className="rounded hover:scale-125 duration-300"/>
        </button>
      </div>
      <div className={currentLocale === "ka" ? "text-yellow" : "text-white"}>
        <button
          type="button"
          onClick={() => langHandleClick("ka")}
          className="flex items-center"
        >
          <Image src={ge} alt="Georgian flag" width={28} height={21} className="rounded hover:scale-125 duration-300"/>
        </button>
      </div>
    </div>
  );
};

export default Language;