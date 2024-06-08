import BlogList from "../../../../components/Blog/BlogList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import { getBlogs } from "../../../../lib/api";

export const metadata = {
  title: "Liquor store - Blog",
  description: "Blog Posts page",
};

export default async function Blog({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const loc = await getLocale();
  const blogListData = await getBlogs();

  return (
    <>
      <TitleBgImage>{loc === "en" ? "Blog" : "ბლოგი"}</TitleBgImage>
      <BlogList blogListData={blogListData} />;
    </>
  );
}
