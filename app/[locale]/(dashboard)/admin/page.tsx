import { unstable_setRequestLocale } from "next-intl/server";
import { UserInfo, getUsers } from "../../../../lib/api";
import Button from "../../../../components/UI/Button";
import { FaPlus } from "react-icons/fa";
import UserDeleteButton from "../../../../components/Admin/UserDeleteButton";
import AddUserForm from "../../../../components/Admin/AddUserForm";
import UserEditButton from "../../../../components/Admin/UserEditButton";

export const revalidate = 0;

export default async function Admin({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const users = await getUsers();

  return (
    <>
      <div className="bg-[#1a1a1a] h-16 w-full"></div>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto">
          <Button>
            Add User
            <FaPlus />
          </Button>
          <div className="py-4 m-auto w-[600px] overflow-x-auto">
            <AddUserForm />
            <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user: UserInfo) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="flex items-center justify-end gap-4 px-6 py-4 whitespace-nowrap ">
                      <UserEditButton id={user.id} />
                      <UserDeleteButton id={user.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
