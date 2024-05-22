"use client";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ProductObject } from "../../../types/products-types";


const Navigation = ({selectedProducts} : {selectedProducts: ProductObject[]}) => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("header");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const selectedNumber =
    typeof window !== "undefined" && selectedProducts
      ? selectedProducts.reduce((acc: number, curr: ProductObject) => {
          return acc + curr.quantity;
        }, 0)
      : 0;

  return (
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
                  pathname === `/`
                    ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                    : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
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
                    : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
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
                    : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
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
                    : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
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
                    : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
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
            <div className="text-white text-xs">
              {isClient && selectedNumber}
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
