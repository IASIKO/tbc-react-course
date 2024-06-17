"use client";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiUserCircleLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ProductObject } from "../../../types/products-types";
import { useEffect, useState, useRef } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { AuthUser } from "../../../types/profile-types";
import Language from "../../UI/Language";
import Theme from "../../UI/Theme";

const Navigation = ({
  selectedProducts,
  authUser,
}: {
  selectedProducts: ProductObject[];
  authUser: AuthUser;
}) => {
  const pathname = usePathname();
  const t = useTranslations("header");
  const tAdmin = useTranslations("admin");
  const { user } = useUser();
  const [userModalIsOpen, setUserModalIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const userModalRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuIsOpen]);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       userModalRef.current &&
  //       !userModalRef.current.contains(event.target as Node)
  //     ) {
  //       setUserModalIsOpen(false);
  //     }
  //   };

  //   if (userModalIsOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [userModalIsOpen]);

  const selectedNumber = selectedProducts
    ? selectedProducts.reduce((acc: number, curr: ProductObject) => {
        return acc + curr.quantity;
      }, 0)
    : 0;

  return (
    <motion.nav
      className={`${
        isFixed
          ? "fixed top-0 left-0 right-0 z-50 bg-dark animate-fade-in-up duration-300"
          : "bg-dark "
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="max-w-[1140px] flex items-center justify-between m-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/"
          className="font-bold text-[20px] sm:text-[28px] relative uppercase text-white py-[3px] mr-[10px] leading-loose whitespace-nowrap"
        >
          Liquor <span className="text-red">store</span>
        </Link>

        <motion.div
          className="flex basis-auto grow items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="hidden lg:flex flex-row ml-auto">
            {["/", "/about", "/products", "/blog", "/contact"].map(
              (path, index) => (
                <motion.li
                  key={path}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={path}
                    className={`link ${
                      pathname === path
                        ? "text-red text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all"
                        : "text-white text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-red hover:transition-all dark:text-white dark:hover:text-red"
                    }`}
                  >
                    {t(path.substring(1) || "home")}
                  </Link>
                </motion.li>
              )
            )}
          </ul>

          <button
            type="button"
            aria-label="Burger Menu"
            className="lg:hidden text-white text-[30px] ml-auto mr-4"
            onClick={() => setMobileMenuIsOpen(true)}
          >
            <FiMenu />
          </button>
        </motion.div>

        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/cart"
            className="text-red text-[30px] cursor-pointer relative"
          >
            <HiOutlineShoppingBag />
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#4e4d4dbf] opacity-90 flex items-center justify-center">
              <div className="text-white text-xs">{selectedNumber}</div>
            </div>
          </Link>
          <button
            type="button"
            aria-label="usermodal"
            onClick={() => setUserModalIsOpen(!userModalIsOpen)}
            className="text-white text-[32px] ml-4"
          >
            <PiUserCircleLight />
          </button>
          <AnimatePresence>
            {userModalIsOpen && (
              <motion.div
                ref={userModalRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-[200px] absolute top-[50px] right-8 z-50 bg-gray-dark rounded-md p-5"
              >
                <div className="flex flex-col gap-4">
                  {user?.sub && (
                    <>
                      <Link
                        onClick={() => setUserModalIsOpen(false)}
                        href="/profile"
                        className="text-white text-[20px] bg-red rounded px-4 text-center"
                      >
                        {t("profile")}
                      </Link>
                      <Link
                        onClick={() => setUserModalIsOpen(false)}
                        href="/orders"
                        className="text-white text-[20px] bg-red rounded px-4 text-center"
                      >
                        {t("orders")}
                      </Link>
                    </>
                  )}
                  {authUser?.role && authUser.role === "admin" && (
                    <Link
                      onClick={() => setUserModalIsOpen(false)}
                      href="/admin"
                      className="text-white text-[20px] bg-red rounded px-4 text-center"
                    >
                      {tAdmin("admin")}
                    </Link>
                  )}
                  {user ? (
                    <a
                      href="/api/auth/logout"
                      className="text-red text-[20px] bg-white rounded px-4 text-center"
                      aria-label="logout"
                    >
                      {t("logout")}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="text-white text-[20px] bg-red rounded px-4 text-center"
                    >
                      <a href="/api/auth/login" aria-label="login">
                        {t("login")}
                      </a>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuIsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden bg-dark fixed inset-0 z-20 pt-[72px]"
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white text-[30px]"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              <IoMdClose />
            </button>
            <Language />
            <div className="duration-300 rounded flex justify-center w-[100px] m-auto">
              <Theme />
            </div>
            <ul className="flex flex-col items-center mt-8">
              {["/", "/about", "/products", "/blog", "/contact"].map(
                (path, index) => (
                  <motion.li
                    key={path}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="w-full text-center"
                  >
                    <Link
                      href={path}
                      className={`block text-[24px] py-4 font-medium uppercase ${
                        pathname === path
                          ? "text-red"
                          : "text-white hover:text-red"
                      }`}
                      onClick={() => setMobileMenuIsOpen(false)}
                    >
                      {t(path.substring(1) || "home")}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
