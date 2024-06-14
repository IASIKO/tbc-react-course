import { unstable_setRequestLocale } from "next-intl/server";
import { getBlogs } from "../../../../../../lib/api";
import { BlogInfo } from "../../../../../../types/blogs.type";
import EditBlogPage from "../../../../../../components/Blog/EditBlog/EditBlogPage";

export const metadata = {
  title: "Liquor store - Edit Blog",
  description: "Edit Blog Posts page",
};

export default async function EditBlog({
  params: { locale, id },
}: {
  params: { locale: string, id: string };
}) {
  unstable_setRequestLocale(locale);
  const blogs = await getBlogs()
  const blog = blogs.find((blog: BlogInfo) => {
    return blog.id === Number(id)
    })
  return <EditBlogPage blogInfo={blog}/>;
}
