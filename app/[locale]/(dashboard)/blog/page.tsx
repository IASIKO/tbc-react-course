import { useLocale } from "next-intl";
import BlogList from "../../../../components/Blog/BlogList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export default async function Blog() {
  const blogListData = await getBlogs();
  const locale = useLocale();

  return (
    <>
      <TitleBgImage>{locale === "en" ? "Blog" : "ბლოგი"}</TitleBgImage>
      <BlogList blogListData={blogListData.recipes} />;
    </>
  );
}
