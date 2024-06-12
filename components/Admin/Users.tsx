"use client";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useTranslations } from "next-intl";
import { UsersType } from "../../types/profile-types";
import { useState } from "react";
import { deleteAuthUserAction } from "../../lib/actions";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ThemeLoader from "../UI/ThemeLoader";

interface UsersProps {
  users: UsersType[];
}

const Users = ({ users }: UsersProps) => {
  const [usersData, setUsersData] = useState([...users]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("admin");
  const router = useRouter();

  const userDeleteHandler = async () => {
    if (selectedId) {
      setLoading(true);
      const filteredUsers = usersData.filter((user) => user.id !== selectedId);
      setUsersData(filteredUsers);
      await deleteAuthUserAction(selectedId);
      setLoading(false);
      setModalIsOpen(false);
    }
  };

  const userEditHandler = (id: number) => {
    router.push(`/admin/users/edit-user/${id}`);
  };

  const isClose = () => {
    document.body.style.overflow = "unset";
    setModalIsOpen(false);
    setSelectedId(null);
  };

  const isOpen = (selectedId: number) => {
    document.body.style.overflow = "hidden";
    setModalIsOpen(true);
    setSelectedId(selectedId);
  };

  return (
    <>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto">
          <div className="py-4 m-auto w-[600px] overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow dark:bg-dark">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("picture")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("email")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("role")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("name")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("lastName")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("country")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("city")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("address")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                    {t("phone")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray">
                {usersData.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Image
                        src={user.picture}
                        alt={user.email}
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px] rounded-full"
                      />
                    </td>
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] text-gray-900 dark:text-white">
                        {user.given_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] text-gray-900 dark:text-white">
                        {user.family_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] text-gray-900 dark:text-white">
                        {user.country}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] text-gray-900 dark:text-white">
                        {user.city}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] text-gray-900 dark:text-white">
                        {user.address}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[16px] text-gray-900 dark:text-white">
                        {user.phone}
                      </div>
                    </td>
                    <td className="flex items-center justify-end gap-4 px-6 py-4 whitespace-nowrap ">
                      <button
                        type="button"
                        onClick={() => userEditHandler(user.id)}
                        className="text-red hover:text-yellow cursor-pointer duration-100 hover:dark:text-yellow"
                      >
                        <MdEdit />
                      </button>
                      <button
                        type="button"
                        onClick={() => isOpen(user.id)}
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
          <AnimatePresence>
            {modalIsOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={isClose}
                className="fixed inset-0 z-30 bg-black bg-opacity-80 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: "12.5deg" }}
                  animate={{ scale: 1, rotate: "0deg" }}
                  exit={{ scale: 0, rotate: "0deg" }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-50 p-8 border border-red rounded-xl bg-red dark:bg-gray dark:border-black"
                >
                  <div className="flex items-center flex-col justify-center">
                    <h2 className="text-white uppercase tracking-widest mb-6 dark:text-white text-center max-w-[400px]">
                      Are you sure you want to proceed with deleting user
                      information?
                    </h2>
                    {loading ? (
                      <ThemeLoader />
                    ) : (
                      <div className="flex gap-2 mt-6">
                        <button
                          type="button"
                          onClick={userDeleteHandler}
                          className="p-2 px-6 text-lg bg-white text-red font-medium align-middle duration-300 uppercase flex items-center gap-2"
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          onClick={isClose}
                          className="p-2 px-6 text-lg bg-white text-red font-medium align-middle duration-300 uppercase flex items-center gap-2"
                        >
                          No
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Users;
