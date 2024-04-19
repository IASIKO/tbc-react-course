"use client";

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
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if ("theme" in localStorage) {
      if (e.mathes) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <div className="duration-100 dark:bg-slate-700 bg-gray rounded">
      {options.map((opt) => (
        <button
          className={`w-8 h-8 align-middle leading-9 text-xl rounded-full m-1 text-white ${
            theme === opt.text && "text-yellow"
          }`}
          onClick={() => setTheme(opt.text)}
          key={opt.text}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
};

export default Theme;
