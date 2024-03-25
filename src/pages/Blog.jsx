import React from "react";
import TitleBgImage from "../components/UI/TitleBgImage";
import BlogList from "../components/Blog/BlogList";
import { blogListData } from "../data/BlogListData";

const Blog = () => {
  return (
    <>
      <TitleBgImage>Blog</TitleBgImage>
      <BlogList blogListData={blogListData} />
    </>
  );
};

export default Blog;
