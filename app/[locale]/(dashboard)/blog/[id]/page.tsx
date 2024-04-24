import BlogDetailsContent from "../../../../../components/Blog/BlogDetailsContent";
import TitleBgImage from "../../../../../components/UI/TitleBgImage";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/recipes");
  const blogs = await res.json();
  const paths = blogs.recipes.map((blog: {id: number}) => ({
      id: `/blog/${blog.id}` 
  }));
  return paths;
}

async function getBlogById(blogId: number) {
  const res = await fetch(`https://dummyjson.com/recipes/${blogId}`);

  return res.json();
}

export default async function BlogDetails({ params }: {params: {id: number}}) {
  const blog = await getBlogById(params.id);

  return (
    <>
      <TitleBgImage>Blog Details</TitleBgImage>
      <BlogDetailsContent blogDetails={blog} />
    </>
  );
}
