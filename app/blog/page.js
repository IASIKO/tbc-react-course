"use client";

import BlogList from "@/components/Blog/BlogList";
import TitleBgImage from "@/components/UI/TitleBgImage";
import React, { useEffect, useState } from "react";

export default function Blog() {
  const [blogListData, setBlogListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then(res => setBlogListData(res.recipes));
  }, []);

  return (
    <>
      <TitleBgImage>Blog</TitleBgImage>
      <BlogList blogListData={blogListData} />
    </>
  );
}
