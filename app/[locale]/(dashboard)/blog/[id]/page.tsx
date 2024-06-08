import { unstable_setRequestLocale } from "next-intl/server";
import BlogDetailsContent from "../../../../../components/Blog/BlogDetailsContent";
import { getBlogs } from "../../../../../lib/api";
import { BlogInfo } from "../../../../../types/blogs.type";
import { ResolvingMetadata } from "next";

interface BlogsDetailsProps {
  params: {
    id: number;
    locale: string;
  };
}

export async function generateMetadata(
  { params }: BlogsDetailsProps,
  parent: ResolvingMetadata
) {
  const blogs = await getBlogs();
  const blog = blogs.find((blog: BlogInfo) => blog.id == params.id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${blog.title}`,
    description: `${blog.description}`,
    openGraph: {
      images: [...previousImages, blog.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  const paths = blogs.map((blog: { id: number }) => ({
    id: `/blog/${blog.id}`,
  }));
  return paths;
}

export default async function BlogDetails({
  params: { id, locale },
}: BlogsDetailsProps) {
  unstable_setRequestLocale(locale);
  const blogs = await getBlogs();
  const blog = blogs.find((blog: BlogInfo) => blog.id == id);

  return <BlogDetailsContent blogDetails={blog} />;
}
