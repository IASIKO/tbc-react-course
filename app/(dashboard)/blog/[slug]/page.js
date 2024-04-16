import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";
import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getBlogById(blogId) {
  const res = await fetch(`https://dummyjson.com/recipes/${blogId}`);

  return res.json();
}

export default async function BlogDetails({ params }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) redirect("/login");

  const blog = await getBlogById(params.slug);

  return (
    <>
      <TitleBgImage>Blog Details</TitleBgImage>
      <BlogDetailsContent blogDetails={blog} />
    </>
  );
}
