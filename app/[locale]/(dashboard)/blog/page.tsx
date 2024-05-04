import { useLocale } from "next-intl";
import BlogList from "../../../../components/Blog/BlogList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { unstable_setRequestLocale } from "next-intl/server";

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
  const loc = useLocale();

  return (
    <>
      <TitleBgImage>{loc === "en" ? "Blog" : "ბლოგი"}</TitleBgImage>
      <BlogList blogListData={blogListData.recipes} />;
    </>
  );
}
