import { ProductForm } from "../types/products-types";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-react-course-mu.vercel.app";

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

export const updateRating = async (rating: number, id: number) => {
  await fetch(`${BASE_URL}/api/products/update-rating`, {
    method: "PUT",
    body: JSON.stringify({ rating, id }),
    cache: "no-store",
  });
};
