import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Navigation from "./Navigation";
import Language from "../../UI/Language";
import Theme from "../../UI/Theme";
import { ProductObject } from "../../../types/products-types";
import { AuthUser } from "../../../types/profile-types";

const Header = ({
  selectedProducts,
  authUser,
}: {
  selectedProducts: ProductObject[];
  authUser: AuthUser;
}) => {

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
                    aria-label="Social Media - Facebook"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    aria-label="Social Media - Twiter"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="Social Media - Instagram"
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
          <div className="lg:hidden text-white flex justify-center items-center cursor-pointer">
            <div className="w-full font-extralight flex items-center justify-between px-2">
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
            </div>
          </div>
        </div>
      </div>

      <Navigation selectedProducts={selectedProducts} authUser={authUser} />
    </header>
  );
};

export default Header;
