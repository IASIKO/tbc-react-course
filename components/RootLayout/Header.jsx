"use client";

import { FaUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const isUserLogedin = true;
  const pathname = usePathname();

  return (
    <header>
      <div className="relative z-0 w-[100%] bg-red">
        <div className="max-w-[1140px] m-auto">
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
              {isUserLogedin ? (
                <button className="text-white text-[20px]">
                  <Link href="/profile" className="flex items-center gap-2">
                    <FaUser />
                    Profile
                  </Link>
                </button>
              ) : (
                <div>
                  <p className="font-extralight ">
                    <a
                      href="#"
                      className="text-[#ffffff] uppercase text-[16px] mr-[9px]"
                    >
                      sign up
                    </a>
                    <a
                      href="#"
                      className="text-[#ffffff] uppercase text-[16px] mr-[9px]"
                    >
                      log in
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="absolute left-0 right-0 z-10 bg-transparent">
        <div className="max-w-[1140px] flex items-center justify-between m-auto">
          <Link
            href="/"
            className="font-bold text-[28px] relative uppercase text-white py-[3px] mr-[10px] leading-loose whitespace-nowrap"
          >
            Liquor <span className="text-gray">store</span>
          </Link>

          <div className="flex basis-auto grow items-center">
            <ul className="flex flex-row ml-auto">
              <li>
                <Link
                  href="/"
                  className={`link ${
                    pathname === "/"
                      ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`link ${
                    pathname === "/about"
                      ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`link ${
                    pathname === "/products"
                      ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`link ${
                    pathname === "/blog"
                      ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`link ${
                    pathname === "/contact"
                      ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-red text-[25px] cursor-pointer">
            <HiOutlineShoppingBag />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
