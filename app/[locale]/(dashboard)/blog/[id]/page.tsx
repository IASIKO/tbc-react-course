import BlogDetailsContent from "../../../../../components/Blog/BlogDetailsContent";
import TitleBgImage from "../../../../../components/UI/TitleBgImage";
import { getDictionary } from "../../../dictionaries";

interface BlogsDetailsProps {
  params: {
    id: number;
    locale: string;
  };
}

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

export default async function BlogDetails({
  params: { id, locale },
}: BlogsDetailsProps) {
  const blog = await getBlogById(id);
  const dict = await getDictionary(locale);

  return (
    <>
      <TitleBgImage>{dict.blogs.singlePageTitle}</TitleBgImage>
      <BlogDetailsContent blogDetails={blog} dict={dict} />
    </>
  );
}
