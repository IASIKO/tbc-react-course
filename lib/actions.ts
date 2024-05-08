"use server";

import { cookies } from "next/headers";
import { createUser, deleteUser, editUser } from "./api";
import { revalidatePath } from "next/cache";

export const setLanguage = (lang: string) => {
  cookies().set("NEXT_LOCALE", lang);
};

export const createUserAction = async (name: string, email: string) => {
  return createUser(name as string, email as string);
};

export const deleteUserAction = async (id: number) => {
  await deleteUser(id);
};

export const editUserAction = async (
  id: number,
  name: string,
  email: string
) => {
  await editUser(id, name as string, email as string);
};
