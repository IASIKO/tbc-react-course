import { ProductForm } from "../types/products-types";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-react-course-mu.vercel.app";

// USERS

export interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users/get-users`, {
    cache: "no-store",
  });
  const { users } = await res.json();

  return users.rows;
};

export const createUser = async (name: string, email: string) => {
  await fetch(`${BASE_URL}/api/users/create-user`, {
    method: "POST",
    body: JSON.stringify({ name, email }),
    cache: "no-store",
  });
};

export const deleteUser = async (userId: number) => {
  await fetch(`${BASE_URL}/api/users/delete-user/${userId}`, {
    method: "DELETE",
    cache: "no-store",
  });
};

export const editUser = async (userId: number, name: string, email: string) => {
  await fetch(`${BASE_URL}/api/users/edit-user/${userId}`, {
    method: "PUT",
    body: JSON.stringify({ name, email }),
    cache: "no-store",
  });
};

// PRODUCTS

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products/get-products`, {
    cache: "no-store",
  });
  const { products } = await res.json();

  return products.rows;
};

export const createProduct = async (product: ProductForm) => {
  await fetch(`${BASE_URL}/api/products/create-product`, {
    method: "POST",
    body: JSON.stringify({ product }),
    cache: "no-store",
  });
};

export const deleteProduct = async (productId: number) => {
  await fetch(`${BASE_URL}/api/products/delete-product/${productId}`, {
    method: "DELETE",
    cache: "no-store",
  });
};

export const editProduct = async (product: ProductForm, id: number) => {
  await fetch(`${BASE_URL}/api/products/edit-product`, {
    method: "PUT",
    body: JSON.stringify({ product, id }),
    cache: "no-store",
  });
};
