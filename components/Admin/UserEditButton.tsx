"use client";

import { MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import { editUserAction } from "../../lib/actions";

const UserEditButton = ({ id }: { id: number }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        editUserAction(id);
        router.refresh();
      }}
      className="hover:text-yellow cursor-pointer duration-100"
    >
      <MdEdit />
    </button>
  );
};

export default UserEditButton;
