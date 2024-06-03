import { unstable_setRequestLocale } from "next-intl/server";
import { getUsers } from "../../../../lib/api";
import Users from "../../../../components/Admin/Users";

export const metadata = {
  title: "Liquor store - Admin",
  description: "Admin page",
};

export default async function Admin({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const users = await getUsers();

  return <Users users={users} />;
}
