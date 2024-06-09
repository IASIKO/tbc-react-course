import React from "react";

interface LinksInfo {
  title: string;
  list: string[];
}

interface FooterLinksProps {
  linksInfo: LinksInfo;
}
const FooterLinks: React.FC<FooterLinksProps> = ({ linksInfo }) => {
  return (
    <div className="flex flex-col sm:flex-1 sm:max-w-[100%]">
      <div className="ml-[15px] mb-[15px]">
        <h2 className="text-red mb-[30px] text-[20px] font-normal">
          {linksInfo.title}
        </h2>
        <ul>
          {linksInfo.list.map((listItem, index) => (
            <li
              key={index}
              className="text-white cursor-pointer text-[18px] font-medium mb-[10px]"
            >
              {listItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
