import React from "react";

const Footer = () => {
  return (
    <footer className="text-[16px] pt-[60px] bg-[#1a1a1a] text-[#ffffff]">
      <div className="max-w-[1140px] m-auto">
        <div className="flex flex-wrap mb-[30px]">
          <div className="flex-1 max-w-[100%]">
            <div className="ml-[15px] mb-[15px]">
              <h2 className="text-[#ffffff] mb-[30px] text-[20px] font-normal">My Account</h2>
              <ul>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">My Account</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">Register</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">Log in</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">My Order</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 max-w-[100%]">
            <div className="ml-[15px] mb-[15px]">
              <h2 className="text-[#ffffff] mb-[30px] text-[20px] font-normal">Information</h2>
              <ul>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">About us</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">Catalog</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">Contact us</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">Term & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 max-w-[100%]">
            <div className="ml-[15px] mb-[15px]">
              <h2 className="text-[#ffffff] mb-[30px] text-[20px] font-normal">Quick Link</h2>
              <ul>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">New User</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">Help Center</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">Report Spam</li>
                <li className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]">Faq's</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 max-w-[100%]">
            <div className="ml-[15px] mb-[15px]">
              <h2 className="text-[#ffffff] mb-[30px] text-[20px] font-normal">Newsletter Subscription</h2>
              <input type="email" placeholder="Email..." className="p-[10px] rounded-[5px] border-none"/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pb-[30px] pt-[30px] w-[100%] mr-auto ml-auto">
        <div className="max-w-[1140px] w-[100%] pr-[15px] pl-[15px] mr-auto ml-auto">
          <p>
            Copyright © 2024 All rights reserved | This website is made by{" "}
            <a
              href="https://www.linkedin.com/in/giorgi-iaseshvili"
              target="_blank"
            >
              Giorgi Iaseshvili
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
