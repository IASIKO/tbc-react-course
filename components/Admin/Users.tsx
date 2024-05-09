"use client";

import { useState } from "react";
import { UserInfo } from "../../lib/api";
import AddUserForm from "./AddUserForm";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import {
  createUserAction,
  deleteUserAction,
  editUserAction,
} from "../../lib/actions";
import ThemeLoader from "../UI/ThemeLoader";

interface UsersProps {
  users: UserInfo[];
}

const Users = ({ users }: UsersProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isDeleteLoading, setIsDeletLoading] = useState(false);
  const [formData, setFormData] = useState({ id: 0, name: "", email: "" });
  const router = useRouter();

  const isOpen = () => {
    setModalIsOpen(true);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitLoading(true);
    if (isUpdate) {
      await editUserAction(formData.id, formData.name, formData.email);
    } else {
      await createUserAction(formData.name, formData.email);
    }
    setFormData({ id: 0, name: "", email: "" });
    setIsUpdate(false);
    router.refresh();
    setIsSubmitLoading(false);
    setModalIsOpen(false);
  };

  const isClose = () => {
    setModalIsOpen(false);
    setFormData({ id: 0, name: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const sortedUsers = users.slice().sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="bg-[#1a1a1a] h-16 w-full"></div>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto">
          <div className="py-4 m-auto w-[600px] overflow-x-auto">
            <AddUserForm
              modalIsOpen={modalIsOpen}
              isOpen={isOpen}
              submitHandler={submitHandler}
              isClose={isClose}
              handleChange={handleChange}
              name={formData.name}
              email={formData.email}
              isUpdate={isUpdate}
              isSubmitLoading={isSubmitLoading}
            />
            {isDeleteLoading ? (
              <ThemeLoader />
            ) : (
              <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow dark:bg-dark">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray">
                  {sortedUsers.map((user: UserInfo) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-[16px] text-gray-900 dark:text-white">
                          {user.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-[16px] text-gray-900 dark:text-white">
                          {user.email}
                        </div>
                      </td>
                      <td className="flex items-center justify-end gap-4 px-6 py-4 whitespace-nowrap ">
                        <button
                          onClick={() => {
                            isOpen();
                            setIsUpdate(true);
                            setFormData({
                              id: user.id,
                              name: user.name,
                              email: user.email,
                            });
                          }}
                          className="hover:text-yellow cursor-pointer duration-100 dark:text-white hover:dark:text-yellow"
                        >
                          <MdEdit />
                        </button>
                        <button
                          onClick={async () => {
                            setIsDeletLoading(true);
                            await deleteUserAction(user.id);
                            router.refresh();
                            setIsDeletLoading(false);
                          }}
                          className="hover:text-yellow cursor-pointer duration-100 dark:text-white hover:dark:text-yellow"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
