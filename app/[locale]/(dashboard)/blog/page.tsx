import BlogList from "../../../../components/Blog/BlogList";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export default async function Blog() {
  const blogListData = await getBlogs();

  return <BlogList blogListData={blogListData.recipes} />;
}
