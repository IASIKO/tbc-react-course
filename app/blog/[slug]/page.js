import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import { Suspense } from "react";
import Loading from "../loading";

async function getBlogById(blogId) {
  const res = await fetch(`https://dummyjson.com/recipes/${blogId}`);

  return res.json();
}

export default async function BlogDetails({ params }) {
  const blog = await getBlogById(params.slug);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <BlogDetailsContent blogDetails={blog} />
      </Suspense>
    </>
  );
}
