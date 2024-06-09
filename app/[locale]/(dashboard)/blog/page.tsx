import BlogList from "../../../../components/Blog/BlogList";
import { unstable_setRequestLocale } from "next-intl/server";
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

  const blogListData = await getBlogs();

  return (
    <>
      <BlogList blogListData={blogListData} />
    </>
  );
}
