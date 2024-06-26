import React from "react";
import FooterLinks from "./FooterLinks";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const footerLinksContent = [
    {
      title: t("myAccount"),
      list: [t("myAccount"), t("register"), t("login"), t("myOrder")],
    },
    {
      title: t("information"),
      list: [t("aboutUs"), t("catalog"), t("contactUs"), t("terms")],
    },
    {
      title: t("quickLink"),
      list: [t("newUser"), t("help"), t("spam"), t("faqs")],
    },
  ];

  return (
    <footer className="text-[16px] pt-[60px] bg-[#1a1a1a] text-[#ffffff]">
      <div className="max-w-[1140px] m-auto animate-fade-in-up">
        <div className="flex flex-wrap mb-[30px]">
          {footerLinksContent.map((linksContent, index) => (
            <FooterLinks linksInfo={linksContent} key={index} />
          ))}
          <div className="flex-1 max-w-[100%]">
            <div className="ml-[15px] mb-[15px]">
              <h2 className="text-[#ffffff] mb-[30px] text-[20px] font-normal">
                {t("subscription")}
              </h2>
              <input
                type="email"
                placeholder={t("subscriptionInputPH")}
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
