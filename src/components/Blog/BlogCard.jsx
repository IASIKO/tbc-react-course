import React from "react";

const BlogCard = ({ listItem }) => {
  return (
    <div className="mb-[30px] flex">
      <div
        style={{ backgroundImage: `url(${listItem.image})` }}
        className="w-[50%] bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="w-[50%] bg-[#f5f4f0] p-[15px]">
        <p className="mb-[10px]">
          <span className="pr-[10px] text-gray">{listItem.date}</span>
        </p>
        <h3 className="text-[27px] font-medium italic mb-[10px] leading-normal text-black">
          {listItem.title}
        </h3>
        <p className="mb-[10px]">{listItem.description}</p>
        <a href="#" className="text-red italic font-bold">
          Continue
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
