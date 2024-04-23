import BlogList from "../../../../components/Blog/BlogList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export default async function Blog() {
  const blogListData = await getBlogs();

  return (
    <>
      <TitleBgImage>Blog</TitleBgImage>
      <BlogList blogListData={blogListData.recipes} />
    </>
  );
}
