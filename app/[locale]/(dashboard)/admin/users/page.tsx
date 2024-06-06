import { unstable_setRequestLocale } from "next-intl/server";
import Users from "../../../../../components/Admin/Users";
import { getUsers } from "../../../../../lib/actions";

export const metadata = {
  title: "Liquor store - Users",
  description: "Users page",
};

export default async function UsersPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const users = await getUsers();

  return <Users users={users} />;
}
