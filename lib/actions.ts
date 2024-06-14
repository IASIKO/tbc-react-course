"use server";

import { cookies } from "next/headers";
import {
  BASE_URL,
  createBlog,
  createProduct,
  deleteBlog,
  deleteProduct,
  editBlog,
  editProduct,
  updateRating,
} from "./api";
import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";
import { CheckoutProfile, Profile, ReviewType } from "../types/profile-types";
import { ProductForm, selectedProduct } from "../types/products-types";
import { redirect } from "next/navigation";
import { Blog } from "../types/blogs.type";

export const setLanguage = (lang: string) => {
  cookies().set("NEXT_LOCALE", lang);
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

export const createProductAction = async (product: ProductForm, thumbnail: string) => {
  return createProduct(product, thumbnail);
};

export const removeProductAction = async (id: number) => {
  revalidatePath("/", "layout");
  await deleteProduct(id);
};

export const editProductAction = async (product: ProductForm, id: number, thumbnail: string) => {
  revalidatePath("/", "layout");
  await editProduct(product, id, thumbnail);
};

export const updateRatingAction = async (rating: number, id: number) => {
  revalidatePath("/", "layout");
  await updateRating(rating, id);
};

// BLOGS
export const createBlogAction = async (blog: Blog, userId: number, thumbnail: string) => {
  return createBlog(blog, userId, thumbnail);
};

export const removeBlogAction = async (id: number) => {
  revalidatePath("/blog");
  await deleteBlog(id);
};

export const editBlogAction = async (blog: Blog, id: number, thumbnail: string) => {
  revalidatePath("/", "layout");
  await editBlog(blog, id, thumbnail);
};

// REVIEWS

export async function getReviewsAction(prod_id: number) {
  revalidatePath("/products");
  const res = await fetch(`${BASE_URL}/api/reviews/get-reviews/${prod_id}`, {
    method: "GET",
    cache: "no-store",
  });

  return await res.json();
}

export async function addReviewAction(review: ReviewType) {
  revalidatePath("/products");
  await fetch(BASE_URL + "/api/reviews/add-review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ review }),
  });
}

export const deleteReviewAction = async (id: number) => {
  revalidatePath("/products");
  await fetch(`${BASE_URL}/api/reviews/delete-review`, {
    method: "DELETE",
    cache: "no-store",
    body: JSON.stringify({ id }),
  });
};

export async function editReviewAction(review: ReviewType, id: number | null) {
  revalidatePath("/products");
  await fetch(BASE_URL + "/api/reviews/edit-review", {
    method: "PUT",
    body: JSON.stringify({ review, id }),
  });
}

// CHECKOUT

export async function checkoutAction(
  cartProducts: selectedProduct[],
  profile: CheckoutProfile
) {
  await fetch(BASE_URL + "/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products: cartProducts, profile }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.url) {
        redirect(response.url);
      }
    });
}

export async function createRefund(chargeId: string) {
  revalidatePath("/orders");
  await fetch(BASE_URL + "/api/orders/create-refund", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chargeId }),
  });
}
