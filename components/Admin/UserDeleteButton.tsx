"use client";

import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { deleteUserAction } from "../../lib/actions";

const UserDeleteButton = ({
  id,
}: {
  id: number;
}) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        deleteUserAction(id)
        router.refresh();
      }}
      className="hover:text-yellow cursor-pointer duration-100"
    >
      <MdDelete />
    </button>
  );
};

export default UserDeleteButton;
