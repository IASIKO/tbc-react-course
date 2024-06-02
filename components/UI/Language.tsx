"use client";

import { useRouter } from "next/navigation";
import { setLanguage } from "../../lib/actions";
import { useLocale } from "next-intl";

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
        <button onClick={() => langHandleCLick("en")}>EN</button>
      </div>
      <div className={locale === "ka" ? "text-yellow" : "text-white"}>
        <button onClick={() => langHandleCLick("ka")}>ქა</button>
      </div>
    </div>
  );
};

export default Language;
