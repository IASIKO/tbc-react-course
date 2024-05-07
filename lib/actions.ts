"use server";

import { cookies } from "next/headers";
import { createUser, deleteUser, editUser } from "./api";

export const setLanguage = (lang: string) => {
  cookies().set("NEXT_LOCALE", lang);
};

export const createUserAction = async (formData: FormData) => {
  const { name, email } = Object.fromEntries(formData);
  return createUser(name as string, email as string);
};

export const deleteUserAction = async (id: number) => {
  await deleteUser(id);
};

export const editUserAction = async (id: number) => {
  await editUser(id);
};
