import BlogList from "@/components/Blog/BlogList";
import TitleBgImage from "@/components/UI/TitleBgImage";
import { Suspense } from "react";
import Loading from "./loading";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export default async function Blog() {
  const blogListData = await getBlogs();

  return (
    <>
      <TitleBgImage>Blog</TitleBgImage>
      <Suspense fallback={<Loading />}>
        <BlogList blogListData={blogListData.recipes} />
      </Suspense>
    </>
  );
}
