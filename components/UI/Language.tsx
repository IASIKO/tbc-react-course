"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { setLanguage } from "../../lib/actions";

const Language = ({ dict }) => {
  let pathname = usePathname();
  let route = pathname.substring(6);
  const isEnUs = pathname.startsWith("/en-US");

  const langHandleCLick = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="duration-100 flex gap-2 items-center justify-center">
      <Link
        href={`/en-US/${route}`}
        className={isEnUs ? "text-yellow" : "text-black dark:text-balck"}
      >
        <button onClick={() => langHandleCLick("en-US")}>
          {dict.login.en}
        </button>
      </Link>
      <Link
        href={`/ka-GE/${route}`}
        className={!isEnUs ? "text-yellow" : "text-black dark:text-black"}
      >
        <button onClick={() => langHandleCLick("ka-GE")}>
          {dict.login.ge}
        </button>
      </Link>
    </div>
  );
};

export default Language;
