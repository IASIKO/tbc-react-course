import React from "react";
import FooterLinks from "./FooterLinks";

const footerLinksContent = [
  {
    title: "My Account",
    list: ["My Account", "Register", "Log in", "My Order"],
  },
  {
    title: "Information",
    list: ["About us", "Catalog", "Contact us", "Term & Conditions"],
  },
  {
    title: "Quick Link",
    list: ["New User", "Help Center", "Report Spam", "Faq's"],
  },
];

const Footer = () => {
  return (
    <footer className="text-[16px] pt-[60px] bg-[#1a1a1a] text-[#ffffff]">
      <div className="max-w-[1140px] m-auto">
        <div className="flex flex-wrap mb-[30px] animate-[fall_3s_ease_100ms]">
          {footerLinksContent.map((linksContent,index) => (
            <FooterLinks linksInfo={linksContent} key={index}/>
          ))}
          <div className="flex-1 max-w-[100%]">
            <div className="ml-[15px] mb-[15px]">
              <h2 className="text-[#ffffff] mb-[30px] text-[20px] font-normal">
                Newsletter Subscription
              </h2>
              <input
                type="email"
                placeholder="Email..."
                className="p-[10px] rounded-[5px] border-none"
              />
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
