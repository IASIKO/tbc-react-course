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
    <section className="py-[60px] relative dark:bg-gray animate-fade-in-up">
      <div className="max-w-[1140px] px-[15px] m-auto">
        <div className="mb-[30px]">
          <div className="text-center">
            <span className="text-red text-[21px] font-normal italic">
              {t("title")}
            </span>
            <h2 className="text-[40px] font-bold text-black dark:text-white">
              {t("recentBlog")}
            </h2>
          </div>
        </div>
        <div className="w-[1140px] grid grid-cols-2 gap-4">
          {blogListData?.map((listItem, index) => (
            <BlogCard blogInfo={listItem} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
