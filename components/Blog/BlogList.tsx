"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useTranslations } from "next-intl";
import { Blog } from "../../types/blogs.type";
import Search from "../Search";
import { usePathname } from "next/navigation";

interface BlogListProps {
  blogListData: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogListData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Blog[]>([]);
  const [blogsListData, setblogsListData] = useState<Blog[]>([]);
  const path = usePathname();

  const t = useTranslations("blogs");

  useEffect(() => {
    setblogsListData(blogListData);
  }, []);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      if (searchValue === "") {
        setFilteredProducts([...blogsListData]);
      } else {
        const filterData = blogsListData.filter((blog) =>
          blog.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filterData);
      }
    }, 500);

    setTimeoutId(newTimeoutId);
  }, [searchValue, blogsListData]);

  const onSearchInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="py-[60px] relative dark:bg-gray animate-fade-in-up">
      <div className="max-w-[1140px] px-[15px] m-auto">
        <div className="mb-[30px]">
          <div className="pb-[30px] flex-col flex justify-center items-center">
            <span className="text-red text-[21px] font-normal italic">
              {t("title")}
            </span>
            <h2 className="text-[45px] font-bold text-black leading-normal dark:text-white">
              {t("recentBlog")}
            </h2>
            {path === "/blog" && (
            <div className="pt-[60px] px-[15px] w-[1140px] flex justify-between">
              <Search
                onChange={onSearchInputChangeHandler}
                searchValue={searchValue}
              />
            </div>
             )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((listItem, index) => (
            <BlogCard blogInfo={listItem} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
