"use client";

import { useRouter } from "next/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";
import { handleLogoutRoute } from "../../lib/helpers";

interface Dict {
  header: Record<string, string>;
}


const LogoutButton: React.FC<{ dict: Dict }> = ({ dict }) => {
  const router = useRouter();
  return (
    <button
      className="text-red text-[20px] bg-white rounded-xl px-[10px] flex items-center gap-2"
      onClick={() => {
        handleLogoutRoute().then(() => router.push("/"));
      }}
    >
      <RiLogoutCircleLine />
      {dict.header.logout}
    </button>
  );
};

export default LogoutButton;
