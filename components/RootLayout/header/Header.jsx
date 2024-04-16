"use server";

import { FaUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Navigation from "./Navigation";
import { logout } from "@/app/actions";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/UI/LogoutButton";

const Header = async () => {
  const handleLogout = async () => {
    "use server";
    await logout();
    redirect("/login");
  };

  return (
    <header>
      <div className="relative z-0 w-[100%] bg-red">
        <div className="max-w-[1140px] m-auto py-[5px]">
          <div className="flex flex-wrap px-[15px]">
            <div className="contactRow flex items-center flex-[0_0_50%] max-w-[50%]">
              <p className="font-extralight">
                <a href="#" className="text-[#ffffff] text-[15px] mr-[5px]">
                  <span>+00 1234 567</span>
                </a>
                <a href="#" className="text-[#ffffff] text-[15px] mr-[5px]">
                  <span>youremail@email.com</span>
                </a>
              </p>
            </div>

            <div className="flex justify-end flex-[0_0_50%] max-w-[50%]">
              <div className="socialMedia mr-[15px] flex items-center">
                <p className="w-[100%] flex text-[18px]">
                  <a
                    href="#"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="#"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    <FaInstagram />
                  </a>
                </p>
              </div>

              <div className="flex gap-4">
                <button className="text-white text-[20px]">
                  <Link href="/profile" className="flex items-center gap-2">
                    <FaUser />
                    Profile
                  </Link>
                </button>
                <LogoutButton handleLogout={handleLogout} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
