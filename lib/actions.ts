"use server";

import { cookies } from "next/headers";
import {
  BASE_URL,
  createProduct,
  deleteProduct,
  editProduct,
  editUser,
  updateRating,
} from "./api";
import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";
import { Profile, ReviewType } from "../types/profile-types";
import { ProductForm } from "../types/products-types";

export const setLanguage = (lang: string) => {
  cookies().set("NEXT_LOCALE", lang);
};

// USERS



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
export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/auth-users/get-users`, {
    cache: "no-store",
  });
  const { auth_users } = await res.json();

  return auth_users.rows;
};

export const deleteAuthUserAction = async (userId: number) => {
  await fetch(`${BASE_URL}/api/auth-users/delete-user/${userId}`, {
    method: "DELETE",
    cache: "no-store",
  });
};

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

export const updateRatingAction = async (rating: number, id: number) => {
  revalidatePath("/", "layout");
  await updateRating(rating, id);
};

// REVIEWS

export async function getReviewsAction(prod_id: number) {
  revalidatePath("/", "layout");
  const res = await fetch(`${BASE_URL}/api/reviews/get-reviews/${prod_id}`, {
    method: "GET",
    cache: 'no-store'
  });

  return await res.json();
}

export async function addReviewAction(review: ReviewType) {
  revalidatePath("/", "layout");
  await fetch(BASE_URL + "/api/reviews/add-review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ review }),
  });
}

export const deleteReviewAction = async (id: number) => {
  revalidatePath("/", "layout");
  await fetch(`${BASE_URL}/api/reviews/delete-review`, {
    method: "DELETE",
    cache: "no-store",
    body: JSON.stringify({ id }),
  });
};

export async function editReviewAction(review: ReviewType, id: number | null) {
  revalidatePath("/", "layout");
  await fetch(BASE_URL + "/api/reviews/edit-review", {
    method: "PUT",
    body: JSON.stringify({ review, id }),
  });
}