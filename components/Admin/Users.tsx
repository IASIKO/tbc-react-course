"use client";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useTranslations } from "next-intl";
import { UsersType } from "../../types/profile-types";
import { useState } from "react";
import { deleteAuthUserAction } from "../../lib/actions";

interface UsersProps {
  users: UsersType[];
}

const Users = ({ users }: UsersProps) => {
  const t = useTranslations("admin");
  const [usersData, setUsersData] = useState([...users]);
  console.log("🚀 ~ Users ~ usersData:", usersData);

  const userDeleteHandler = async (id: number) => {
    const filteredUsers = usersData.filter((user) => user.id !== id);
    setUsersData(filteredUsers);
    await deleteAuthUserAction(id);
  };

  return (
    <>
      <div className="bg-[#1a1a1a] h-16 w-full"></div>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto">
          <div className="py-4 m-auto w-[600px] overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow dark:bg-dark">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("email")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray">
                {usersData.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] text-gray-900 dark:text-white">
                        {user.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] text-gray-900 dark:text-white">
                        {user.role}
                      </div>
                    </td>
                    <td className="flex items-center justify-end gap-4 px-6 py-4 whitespace-nowrap ">
                      <button
                        onClick={() => {}}
                        className="text-red hover:text-yellow cursor-pointer duration-100 hover:dark:text-yellow"
                      >
                        <MdEdit />
                      </button>
                      <button
                        onClick={() => userDeleteHandler(user.id)}
                        className="text-red hover:text-yellow cursor-pointer duration-100 hover:dark:text-yellow"
                      >
                        <MdDelete />
                      </button>
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
};

export default Users;
