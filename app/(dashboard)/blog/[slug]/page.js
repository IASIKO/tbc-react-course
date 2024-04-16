import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";

async function getBlogById(blogId) {
  const res = await fetch(`https://dummyjson.com/recipes/${blogId}`);

  return res.json();
}

export default async function BlogDetails({ params }) {
  const blog = await getBlogById(params.slug);

  return (
    <>
      <TitleBgImage>Blog Details</TitleBgImage>
      <BlogDetailsContent blogDetails={blog} />
    </>
  );
}
