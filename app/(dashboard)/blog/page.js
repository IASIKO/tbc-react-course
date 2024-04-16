import BlogList from "@/components/Blog/BlogList";
import TitleBgImage from "@/components/UI/TitleBgImage";
import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export default async function Blog() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) redirect("/login");

  const blogListData = await getBlogs();

  return (
    <>
      <TitleBgImage>Blog</TitleBgImage>
      <BlogList blogListData={blogListData.recipes} />
    </>
  );
}
