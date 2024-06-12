import BlogList from "../../../../components/Blog/BlogList";
import { unstable_setRequestLocale } from "next-intl/server";
import { getBlogs } from "../../../../lib/api";
import { getAuthUserAction } from "../../../../lib/actions";
import { getSession } from "@auth0/nextjs-auth0";

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

  const session = await getSession();
  const sub = session?.user?.sub;

  const auth_user = await getAuthUserAction(sub);
  const blogListData = await getBlogs();

  return (
    <>
      <BlogList blogListData={blogListData} authUser={auth_user?.auth_user.rows[0]}/>
    </>
  );
}
