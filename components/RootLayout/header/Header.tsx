"use client";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Navigation from "./Navigation";
import Language from "../../UI/Language";
import Theme from "../../UI/Theme";
import { ProductObject } from "../../../types/products-types";
import { AuthUser, Profile } from "../../../types/profile-types";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { createAuthUserAction } from "../../../lib/actions";
import { motion } from "framer-motion";

const Header = ({
  selectedProducts,
  authUser,
}: {
  selectedProducts: ProductObject[];
  authUser: AuthUser;
}) => {
  const { user } = useUser();
  const [profile] = useState<Profile>({
    given_name: (user?.given_name as string) || "",
    family_name: (user?.family_name as string) || "",
    country: "",
    city: "",
    address: "",
    phone: "",
    email: user?.email || "",
    sub: user?.sub || "",
    picture: user?.picture || "",
    role: authUser?.role && authUser.role === "admin" ? "admin" : "default",
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (user !== undefined) {
      if (user?.picture && !authUser) {
        createAuthUserAction(profile, user?.picture);
      }
    }
  }, [user]);

  return (
    <header>
      <div className="relative w-[100%] bg-red">
        <div className="max-w-[1140px] m-auto py-[5px]">
          <div className="hidden lg:flex flex-wrap px-[15px]">
            <div className="flex flex-[0_0_50%] max-w-[50%] gap-4">
              <p className="font-extralight flex items-center">
                <a
                  href="#"
                  className="text-[#ffffff] text-[15px] mr-[5px]"
                  aria-label="phone"
                >
                  <span>+00 1234 567</span>
                </a>
                <a
                  href="#"
                  className="text-[#ffffff] text-[15px] mr-[5px]"
                  aria-label="email"
                >
                  <span>youremail@email.com</span>
                </a>
              </p>
              <Language />
            </div>

            <div className="flex justify-end flex-[0_0_50%] max-w-[50%]">
              <div className="socialMedia mr-[15px] flex items-center">
                <p className="w-[100%] flex text-[18px]">
                  <a
                    href="#"
                    aria-label="facebook"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    aria-label="twiter"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="instagram"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    <FaInstagram />
                  </a>
                </p>
              </div>

              <div className="duration-100 rounded py-1 px-1 flex justify-center w-[100px]">
                <Theme />
              </div>
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className="lg:hidden text-white flex justify-center items-center cursor-pointer"
          >
            <button type="button" className="text-[30px]">
              {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col items-center">
              <p className="font-extralight flex items-center">
                <a
                  href="#"
                  className="text-[#ffffff] text-[15px] mr-[5px]"
                  aria-label="number"
                >
                  <span>+00 1234 567</span>
                </a>
                <a
                  href="#"
                  className="text-[#ffffff] text-[15px] mr-[5px]"
                  aria-label="phone"
                >
                  <span>youremail@email.com</span>
                </a>
              </p>
              <Language />

              <div className="flex justify-end flex-[0_0_50%] max-w-[50%]">
                <div className="flex items-center">
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
              </div>
              <div className="duration-100 rounded flex justify-center w-[100px]">
                <Theme />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Navigation selectedProducts={selectedProducts} authUser={authUser} />
    </header>
  );
};

export default Header;
