"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdMonitor } from "react-icons/md";

const options = [
  {
    icon: <MdLightMode />,
    text: "light",
  },
  {
    icon: <MdDarkMode />,
    text: "dark",
  },
  {
    icon: <MdMonitor />,
    text: "system",
  },
];

const Theme = () => {
  const [themeValue, setThemeValue] = useState();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setThemeValue(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <div className="duration-100 dark:bg-dark bg-red rounded">
      {options.map((opt) => (
        <button
          className={`w-8 h-8 align-middle leading-9 text-xl rounded-full m-1 text-white ${
            resolvedTheme === themeValue &&
            themeValue === opt.text &&
            "text-yellow"
          }`}
          onClick={() => {
            setTheme(opt.text);
            setThemeValue(opt.text);
          }}
          key={opt.text}
        >
          <span className="flex justify-center">{opt.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default Theme;