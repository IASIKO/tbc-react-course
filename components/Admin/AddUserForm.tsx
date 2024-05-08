"use client";

import { FaPlus } from "react-icons/fa";
import Button from "../UI/Button";

interface UserForm {
  modalIsOpen: boolean;
  isOpen: () => void;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  isClose: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  email: string;
  isUpdate: boolean;
}

const AddUserForm = ({
  modalIsOpen,
  isOpen,
  submitHandler,
  isClose,
  handleChange,
  name,
  email,
  isUpdate,
}: UserForm) => {
  return (
    <>
      {modalIsOpen && (
        <div
          onClick={isClose}
          className="fixed top-0 left-0 w-full h-[100vh] z-30 bg-[#000000bf] opacity-90"
        ></div>
      )}
      <div className="mb-[30px]">
        <Button onClick={isOpen}>
          Add User
          <FaPlus />
        </Button>
      </div>
      {modalIsOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-[60px] border border-red rounded-xl bg-white dark:bg-gray dark:border-black">
          <div className="flex items-center flex-col justify-center">
            <h2 className="uppercase tracking-widest mb-6 dark:text-white">
              {isUpdate ? "Update User" : "Create User"}
            </h2>
            <form
              onSubmit={submitHandler}
              className="w-full flex flex-col justify-center items-center px-[90px]"
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full outline-none py-[5px] px-[15px] border border-red mb-3 dark:border-dark"
              />
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full outline-none py-[5px] px-[15px] border border-red mb-3 dark:border-dark"
              />
              <button
                type="submit"
                className="h-11 flex justify-center uppercase bg-red w-full py-[5px] text-white mb-3 ease-in duration-300 hover:bg-lightred dark:bg-dark dark:hover:bg-secondary"
              >
                SAVE
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddUserForm;
