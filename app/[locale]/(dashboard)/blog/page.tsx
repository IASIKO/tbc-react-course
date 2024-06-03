import BlogList from "../../../../components/Blog/BlogList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Liquor store - Blog",
  description: "Blog Posts page",
};

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export default async function Blog({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const blogListData = await getBlogs();
  const loc = await getLocale();


  return (
    <>
      <TitleBgImage>{loc === "en" ? "Blog" : "ბლოგი"}</TitleBgImage>
      <BlogList blogListData={blogListData.recipes} />;
    </>
  );
}
