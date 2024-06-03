"use server";

import { cookies } from "next/headers";
import {
  BASE_URL,
  createProduct,
  createUser,
  deleteProduct,
  deleteUser,
  editProduct,
  editUser,
} from "./api";
import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";
import { Profile } from "../types/profile-types";
import { ProductForm } from "../types/products-types";

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

// AUTH_USERS

export async function createAuthUserAction(profile: Profile, picture: string) {
  await fetch(`${BASE_URL}/api/auth-users/create-auth-user`, {
    method: "POST",
    body: JSON.stringify({ profile, picture }),
  });
}

export async function updateAuthUserAction(profile: Profile, picture: string) {
  await fetch(BASE_URL + "/api/auth-users/update-auth-user", {
    method: "PUT",
    body: JSON.stringify({ profile, picture }),
  });
}

export async function getAuthUserAction(sub: string) {
  const res = await fetch(BASE_URL + "/api/auth-users/get-auth-user", {
    method: "GET",
    headers: {
      Cookie: `user_id=${sub}`,
    },
  });

  return await res.json();
}

// PRODUCTS

export const createProductAction = async (product: ProductForm) => {
  return createProduct(product);
};

export const removeProductAction = async (id: number) => {
  revalidatePath("/", "layout");
  await deleteProduct(id);
};

export const editProductAction = async (product: ProductForm, id: number) => {
  revalidatePath("/", "layout");
  await editProduct(product, id);
};
