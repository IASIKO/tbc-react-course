import BlogList from "../../../../components/Blog/BlogList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getDictionary } from "../../dictionaries";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export default async function Blog({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const blogListData = await getBlogs();
  const dict = await getDictionary(locale);

  return (
    <>
      <TitleBgImage>{dict.blogs.title}</TitleBgImage>
      <BlogList blogListData={blogListData.recipes} dict={dict} />
    </>
  );
}
