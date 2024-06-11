"use client";

// import { useRouter } from "next/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useTranslations } from "next-intl";


const LogoutButton = () => {
  // const router = useRouter();
  const t = useTranslations('header')
  return (
    <button
      className="text-red text-[20px] bg-white rounded-xl px-[10px] flex items-center gap-2"
      onClick={() => {
        // handleLogoutRoute().then(() => router.push("/login"));
      }}
    >
      <RiLogoutCircleLine />
      {t('logout')}
    </button>
  );
};

export default LogoutButton;
