import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="relative z-0 w-[100%] bg-[#a23f25]">
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
              <div className="socialMedia mr-[15px]">
                <p className="w-[100%] flex">
                  <a
                    href="#"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    FB
                  </a>
                  <a
                    href="#"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    TW
                  </a>
                  <a
                    href="#"
                    className="h-[30px] mr-[10px] flex items-center justify-center text-white"
                  >
                    IN
                  </a>
                </p>
              </div>
              <div className="reg">
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
            </div>
          </div>
        </div>
      </div>

      <nav className="absolute left-0 right-0 z-10 bg-transparent">
        <div className="max-w-[1140px] flex items-center justify-between m-auto">
          <a
            href="#"
            className="font-bold text-[28px] relative uppercase text-white py-[3px] mr-[10px] leading-loose whitespace-nowrap"
          >
            Liquor <span className="text-gray">store</span>
          </a>

          <div className="flex basis-auto grow items-center">
            <ul className="flex flex-row ml-auto">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#a23f25] text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#a23f25] text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#a23f25] text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#a23f25] text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#a23f25] text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                      : "text-gray text-[18px] py-[15px] px-[20px] font-medium uppercase tracking-[1px] opacity-100 hover:cursor-pointer hover:text-[#a23f25] hover:transition-all"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-red">Cart</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;