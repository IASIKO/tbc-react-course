"use client";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiUserCircleLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ProductObject } from "../../../types/products-types";
import { useState } from "react";
// import LogoutButton from "../../UI/LogoutButton";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navigation = ({
  selectedProducts,
}: {
  selectedProducts: ProductObject[];
}) => {
  const pathname = usePathname();
  const t = useTranslations("header");
  const { user } = useUser();

  console.log(user);
  const [userModalisOpen, setUserModalIsClose] = useState(false);

  const selectedNumber = selectedProducts
    ? selectedProducts.reduce((acc: number, curr: ProductObject) => {
        return acc + curr.quantity;
      }, 0)
    : 0;

  return (
    <nav className="absolute left-0 right-0 z-10 bg-dark">
      <div className="max-w-[1140px] flex items-center justify-between m-auto">
        <Link
          href="/"
          className="font-bold text-[28px] relative uppercase text-white py-[3px] mr-[10px] leading-loose whitespace-nowrap"
        >
          Liquor <span className="text-red">store</span>
        </Link>

        <div className="flex basis-auto grow items-center">
          <ul className="flex flex-row ml-auto">
            <li>
              <Link
                href="/"
                className={`link ${
                  pathname === `/`
                    ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                    : "text-white text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all dark:text-white dark:hover:text-red"
                }`}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`link ${
                  pathname === `/about`
                    ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                    : "text-white text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all dark:text-white dark:hover:text-red"
                }`}
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`link ${
                  pathname === `/products`
                    ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                    : "text-white text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all dark:text-white dark:hover:text-red"
                }`}
              >
                {t("products")}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`link ${
                  pathname === `/blog`
                    ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                    : "text-white text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all dark:text-white dark:hover:text-red"
                }`}
              >
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`link ${
                  pathname === `/contact`
                    ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                    : "text-white text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all dark:text-white dark:hover:text-red"
                }`}
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/checkout"
          className="text-red text-[30px] cursor-pointer relative"
        >
          <HiOutlineShoppingBag />
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#4e4d4dbf] opacity-90 flex items-center justify-center">
            <div className="text-white text-xs">{selectedNumber}</div>
          </div>
        </Link>
        <button
          onClick={() => setUserModalIsClose(!userModalisOpen)}
          className="text-white text-[32px] ml-4"
        >
          <PiUserCircleLight />
        </button>

        {userModalisOpen && (
          <div className="absolute top-[50px] right-8 bg-black rounded-md p-5">
            <div className="flex flex-col gap-4">
              <button className="text-white text-[20px]">
                <Link href="/profile" className="flex items-center gap-2">
                  {t("profile")}
                </Link>
              </button>
              {user ? (
                <Link href="/api/auth/logout">Log Out</Link>
              ) : (
                <Link href="/api/auth/login">Log In</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
