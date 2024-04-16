"use client";

import { RiLogoutCircleLine } from "react-icons/ri";

const LogoutButton = ({ handleLogout }) => {
  return (
    <button
      className="text-red text-[20px] bg-white rounded-xl px-[10px] flex items-center gap-2"
      onClick={() => {
        handleLogout();
      }}
    >
      <RiLogoutCircleLine />
      Log out
    </button>
  );
};

export default LogoutButton;
