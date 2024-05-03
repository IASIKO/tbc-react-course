import BlogDetailsContent from "../../../../../components/Blog/BlogDetailsContent";

interface BlogsDetailsProps {
  params: {
    id: number;
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/recipes");
  const blogs = await res.json();
  const paths = blogs.recipes.map((blog: { id: number }) => ({
    id: `/blog/${blog.id}`,
  }));
  return paths;
}

async function getBlogById(blogId: number) {
  const res = await fetch(`https://dummyjson.com/recipes/${blogId}`);

  return res.json();
}

export default async function BlogDetails({
  params: { id },
}: BlogsDetailsProps) {
  const blog = await getBlogById(id);

  return <BlogDetailsContent blogDetails={blog} />;
}
