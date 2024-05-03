import React from "react";
import BlogCard from "./BlogCard";
import { useTranslations } from "next-intl";

interface ListItem {
  image: string;
  rating: number;
  name: string;
  ingredients: string;
  id: number;
}

interface BlogListProps {
  blogListData: ListItem[];
}

const BlogList: React.FC<BlogListProps> = ({ blogListData }) => {
  const t = useTranslations("blogs");
  return (
    <div className="py-[60px] relative dark:bg-gray">
      <div className="max-w-[1140px] px-[15px] m-auto animate-[fall_2s_ease_100ms]">
        <div className="mb-[30px]">
          <div className="text-center">
            <span className="text-red text-[21px] font-normal italic">
              {t("title")}
            </span>
            <h2 className="text-[40px] font-bold text-black">
              {t("recentBlog")}
            </h2>
          </div>
        </div>
        <div className="w-[1140px] grid grid-cols-2 gap-4">
          {blogListData.map((listItem, index) => (
            <BlogCard blogInfo={listItem} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
