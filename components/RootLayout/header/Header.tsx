"use server";

import { FaUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Navigation from "./Navigation";
import Language from "../../UI/Language";
import LogoutButton from "../../UI/LogoutButton";
import Theme from "../../UI/Theme";

interface Dict {
  header: Record<string, string>;
  login: Record<string, string>;
}

const Header: React.FC<{ dict: Dict, locale: string }> = async ({ dict, locale }) => {
  return (
    <header>
      <div className="relative w-[100%] bg-red">
        <div className="max-w-[1140px] m-auto py-[5px]">
          <div className="flex flex-wrap px-[15px]">
            <div className="flex flex-[0_0_50%] max-w-[50%] gap-4">
              <p className="font-extralight flex items-center">
                <a href="#" className="text-[#ffffff] text-[15px] mr-[5px]">
                  <span>+00 1234 567</span>
                </a>
                <a href="#" className="text-[#ffffff] text-[15px] mr-[5px]">
                  <span>youremail@email.com</span>
                </a>
              </p>
              <Language dict={dict} />
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
                    {dict.header.profile}
                  </Link>
                </button>
                <LogoutButton dict={dict} />
                <Theme />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation dict={dict} locale={locale}/>
    </header>
  );
};

export default Header;
