"use client";

import BlogList from "@/components/Blog/BlogList";
import TitleBgImage from "@/components/UI/TitleBgImage";
import React, { useEffect, useState } from "react";

export default function Blog() {
  const [blogListData, setBlogListData] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      const response = await fetch("https://dummyjson.com/recipes");
      const blogs = await response.json();
      setBlogListData(blogs.recipes);
    }

    getBlogs();
  }, []);

  return (
    <>
      <TitleBgImage>Blog</TitleBgImage>
      <BlogList blogListData={blogListData} />
    </>
  );
}
