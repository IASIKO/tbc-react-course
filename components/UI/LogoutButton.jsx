"use client";

import { useRouter } from "next/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";

const LogoutButton = ({ handleLogout }) => {
  const router = useRouter();
  return (
    <button
      className="text-red text-[20px] bg-white rounded-xl px-[10px] flex items-center gap-2"
      onClick={() => {
        handleLogout();
        router.push("/login");
      }}
    >
      <RiLogoutCircleLine />
      Log out
    </button>
  );
};

export default LogoutButton;
