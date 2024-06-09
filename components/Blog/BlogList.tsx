"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useTranslations } from "next-intl";
import { BlogInfo } from "../../types/blogs.type";
import Search from "../Search";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { removeBlogAction } from "../../lib/actions";

interface BlogListProps {
  blogListData: BlogInfo[];
}

const BlogList: React.FC<BlogListProps> = ({ blogListData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<BlogInfo[]>([]);
  const [blogsListData, setblogsListData] = useState<BlogInfo[]>([]);
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

  const removeBlogHandler = (id: number) => {
    const filterData = blogsListData.filter((product) => product.id !== id);
    setblogsListData(filterData);
    removeBlogAction(id);
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
              <div className="pt-[60px] max-w-[1140px] flex flex-col items-center gap-4 lg:justify-between">
                <Search
                  onChange={onSearchInputChangeHandler}
                  searchValue={searchValue}
                />
                <Link
                  href="/blog/add-blog"
                  className="p-[7px] px-6 w-[350px] text-center border border-solid border-red text-[18px] text-red font-medium duration-300 uppercase hover:bg-red hover:text-white"
                >
                  Add Your Blog
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((listItem, index) => (
            <BlogCard
              blogInfo={listItem}
              key={index}
              removeBlogHandler={removeBlogHandler}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
