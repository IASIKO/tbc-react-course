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

interface UsersProps {
  users: UserInfo[];
}

const Users = ({ users }: UsersProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [formData, setFormData] = useState({ id: 0, name: "", email: "" });
  const router = useRouter();

  const isOpen = () => {
    setModalIsOpen(true);
  };

  const submitHandler = async () => {
    if (isUpdate) {
      editUserAction(formData.id, formData.name, formData.email);
    } else {
      createUserAction(formData.name, formData.email);
    }
    setFormData({ id: 0, name: "", email: "" });
    setModalIsOpen(false);
    setIsUpdate(false);
    router.refresh();
  };

  const isClose = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

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
            />
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
                        className="hover:text-yellow cursor-pointer duration-100"
                      >
                        <MdEdit />
                      </button>
                      <button
                        onClick={() => {
                          deleteUserAction(user.id);
                          router.refresh();
                        }}
                        className="hover:text-yellow cursor-pointer duration-100"
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
