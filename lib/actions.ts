"use server";

import { cookies } from "next/headers";
import { BASE_URL, createUser, deleteUser, editUser } from "./api";
import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";

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

export async function createUserCart(prod_id: number, user_id: string) {
  await fetch(`${BASE_URL}/api/carts/create-cart`, {
    method: "POST",
    body: JSON.stringify({ prod_id, user_id }),
  });
}

export async function addProductAction(prod_id: number) {
  const session = await getSession();
  const user = session?.user;

  revalidatePath("/", "layout");
  await fetch(BASE_URL + "/api/carts/add-product", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `userId=${user?.sub}`,
    },
    body: JSON.stringify({ prod_id }),
  });
}

export async function updateCartCountAction(id: number, quantity: number) {
  const session = await getSession();
  const user = session?.user;
  revalidatePath("/", "layout");
  await fetch(BASE_URL + "/api/carts/update-cart", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `userId=${user?.sub}`,
    },
    body: JSON.stringify({ id, quantity }),
    cache: "no-store",
  });
}

export async function resetCartAction() {
  const session = await getSession();
  const user = session?.user;
  revalidatePath("/", "layout");
  await fetch(`${BASE_URL}/api/carts/reset-cart`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `userId=${user?.sub}`,
    },
  });
}

export const getUserCartAction = async () => {
  const session = await getSession();
  const user = session?.user;
  const response = await fetch(BASE_URL + `/api/carts/get-cart`, {
    method: "GET",
    headers: {
      Cookie: `userId=${user?.sub}`,
    },
  });

  const carts = await response.json();

  return carts.cart.rows;
};

export const deleteProductAction = async (prod_id: number) => {
  const session = await getSession();
  const user = session?.user;

  revalidatePath("/", "layout");
  await fetch(`${BASE_URL}/api/carts/delete-product`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `userId=${user?.sub}`,
    },
    body: JSON.stringify({ prod_id }),
  });
};
