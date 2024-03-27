import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogListData }) => {
  return (
    <div className="py-[60px] relative">
      <div className="max-w-[1140px] px-[15px] m-auto animate-[fall_2s_ease_100ms]">
        <div className="mb-[30px]">
          <div className="text-center">
            <span className="text-red text-[21px] font-normal italic">
              Blog
            </span>
            <h2 className="text-[40px] font-bold text-black">Recent Blog</h2>
          </div>
        </div>
        <div className="w-[1140px] grid grid-cols-2 gap-4">
          {blogListData.map((listItem, index) => (
            <BlogCard listItem={listItem} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
