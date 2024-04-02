import BlogList from "@/components/Blog/BlogList";
import TitleBgImage from "@/components/UI/TitleBgImage";
import { blogListData } from "@/data/BlogListData";
import React from "react";

export default function Blog() {
  return (
    <>
      <TitleBgImage>Blog</TitleBgImage>
      <BlogList blogListData={blogListData} />
    </>
  );
}
