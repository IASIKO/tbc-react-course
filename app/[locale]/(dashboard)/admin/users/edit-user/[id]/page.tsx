import EditUserForm from "../../../../../../../components/Admin/EditUserForm";
import { unstable_setRequestLocale } from "next-intl/server";
import { getUsers } from "../../../../../../../lib/actions";
import { UsersType } from "../../../../../../../types/profile-types";

export const metadata = {
  title: "Liquor store - Edit User",
  description: "Edit User page",
};

export default async function EditUserPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  unstable_setRequestLocale(locale);


  const users = await getUsers();

  const authUser = users.find((user: UsersType) => user.id === Number(id));

  return <EditUserForm authUser={authUser} />;
}
