import { unstable_setRequestLocale } from "next-intl/server";
import AddBlogPage from "../../../../../components/Blog/AddBlogPage";
import { getAuthUserAction } from "../../../../../lib/actions";
import { getSession } from "@auth0/nextjs-auth0";

export const metadata = {
  title: "Liquor store - Add Blog",
  description: "Add Blog Posts page",
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

  return <AddBlogPage authUser={auth_user?.auth_user.rows[0]} />;
}
