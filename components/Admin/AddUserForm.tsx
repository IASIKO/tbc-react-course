"use client";

import { createUserAction } from "../../lib/actions";


const AddUserForm = () => {
    
  return (
    <form
      action={createUserAction}
      className="w-full flex flex-col justify-center items-center px-[90px]"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full outline-none py-[5px] px-[15px] border border-red mb-3 dark:border-dark"
      />
      <input
        type="text"
        name="email"
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
  );
};

export default AddUserForm;
