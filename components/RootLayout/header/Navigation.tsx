"use client";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";


const Navigation = () => {
  const pathname = usePathname();
  const t = useTranslations('header')

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
                {t('home')}
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
                {t('about')}
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
                {t('products')}
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
                {t('blog')}
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
                {t('contact')}
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-red text-[25px] cursor-pointer">
          <HiOutlineShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
