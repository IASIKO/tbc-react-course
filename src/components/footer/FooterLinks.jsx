import React from "react";

const FooterLinks = ({ linksInfo }) => {
  return (
    <div className="flex-1 max-w-[100%]">
      <div className="ml-[15px] mb-[15px]">
        <h2 className="text-[#ffffff] mb-[30px] text-[20px] font-normal">
          {linksInfo.title}
        </h2>
        <ul>
          {linksInfo.list.map((listItem, index) => (
            <li
              key={index}
              className="text-gray cursor-pointer text-[18px] font-medium mb-[10px]"
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
