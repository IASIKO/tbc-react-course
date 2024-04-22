"use client";

import { setLanguage } from "@/lib/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Language = ({ dict }) => {
  const pathname = usePathname();
  console.log(pathname);
  
  const langHandleCLick = (lang) => {
    setLanguage(lang);
  }

  return (
    <div className="flex gap-4 items-center justify-center">
      <Link href={`/en-US`} className="dark:text-yellow">
        <button onClick={() => langHandleCLick("en-US")}>
          {dict.login.en}
        </button>
      </Link>
      <Link href={`/ka-GE`} className="dark:text-yellow">
        <button onClick={() => langHandleCLick("ka-GE")}>
          {dict.login.ge}
        </button>
      </Link>
    </div>
  );
};

export default Language;
