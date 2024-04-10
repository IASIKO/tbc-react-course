import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";
import { Suspense } from "react";
import Loading from "../loading";

async function getBlogById(blogId) {
  const response = await fetch(`https://dummyjson.com/recipes/${blogId}`);

  return response.json();
}

export default async function BlogDetails({ params }) {
  const blog = await getBlogById(params.slug);

  return (
    <>
      <TitleBgImage>Blog Details</TitleBgImage>
      <Suspense fallback={<Loading />}>
        <BlogDetailsContent blogDetails={blog} />
      </Suspense>
    </>
  );
}
