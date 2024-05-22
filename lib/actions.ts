"use server";

import { cookies } from "next/headers";
import { BASE_URL, createUser, deleteUser, editUser } from "./api";
import { USER_ID } from "./constants";

export const setLanguage = (lang: string) => {
  cookies().set("NEXT_LOCALE", lang);
};

// USERS

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

// CART

export async function addProductAction(id: number) {
  await fetch(BASE_URL + "/api/carts/add-product", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `userId=${JSON.parse(cookies().get(USER_ID)?.value!)}`,
    },
    body: JSON.stringify({ id }),
  });
}

export async function updateCartCountAction(id: number, quantity: number) {
  await fetch(BASE_URL + "/api/carts/update-cart", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `userId=${JSON.parse(cookies().get(USER_ID)?.value!)}`,
    },
    body: JSON.stringify({ id, quantity }),
    cache: "no-store",
  });
}

export async function resetCartAction() {
  await fetch(`${BASE_URL}/api/carts/reset-cart`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `userId=${JSON.parse(cookies().get(USER_ID)?.value!)}`,
    },
  });
}

export const getUserCartAction = async () => {
  const response = await fetch(BASE_URL + `/api/carts/get-cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `userId=${JSON.parse(cookies().get(USER_ID)?.value!)}`,
    },
  });
  const carts = await response.json();

  return carts.cart.rows;
};
