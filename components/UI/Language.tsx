"use client";

import { useRouter } from "next/navigation";
import { setLanguage } from "../../lib/actions";
import { useLocale } from "next-intl";
import ge from "../../public/Assets/images/ge.svg";
import gb from "../../public/Assets/images/gb.svg";
import Image from "next/image";

const Language = () => {
  const router = useRouter();
  const locale = useLocale();

  const langHandleCLick = (lang: string) => {
    setLanguage(lang);
    router.refresh();
  };

  return (
    <div className="duration-100 flex gap-2 items-center justify-center">
      <div className={locale === "en" ? "text-yellow" : "text-white"}>
        <button
          type="button"
          onClick={() => langHandleCLick("en")}
          className="flex items-center"
        >
          <Image src={ge} alt="Georgian flag" width={32} height={24} className="rounded hover:scale-125 duration-300"/>
        </button>
      </div>
      <div className={locale === "ka" ? "text-yellow" : "text-white"}>
        <button
          type="button"
          onClick={() => langHandleCLick("ka")}
          className="flex items-center"
        >
          <Image src={gb} alt="United Kingdom flag" width={32} height={24} className="rounded hover:scale-125 duration-300"/>
        </button>
      </div>
    </div>
  );
};

export default Language;
