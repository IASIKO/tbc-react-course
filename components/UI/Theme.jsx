"use client";

import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { PiMonitorBold } from "react-icons/pi";

const Theme = () => {
  const [theme, setTheme] = useState("system");
  const [themeIcon, setThemeIcon] = useState(<MdLightMode />);
  const [themeModal, setThemeModal] = useState(false);

  const themeHandleClick = () => {
    setThemeModal(!themeModal);
  };

  return (
    <div className="flex items-center">
      <button className="text-white" onClick={themeHandleClick}>
        {themeIcon}
      </button>
      {themeModal && (
        <div className="absolute top-[50px] right-[60px] z-20">
          <div className="bg-white py-1 rounded-md">
            <button className="w-full flex items-center gap-3 px-[10px] pr-10 hover:bg-secondary">
              <MdLightMode />
              <span className="text-black">Light</span>
            </button>
            <button className="w-full flex items-center gap-3 px-[10px] pr-10 hover:bg-secondary">
              <MdDarkMode />
              <span className="text-black">Dark</span>
            </button>
            <button className="w-full flex items-center gap-3 px-[10px] pr-10 hover:bg-secondary">
              <PiMonitorBold />
              <span className="text-black">System</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Theme;
