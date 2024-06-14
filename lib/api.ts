import { Blog } from "../types/blogs.type";
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

export const createProduct = async (product: ProductForm, thumbnail: string) => {
  await fetch(`${BASE_URL}/api/products/create-product`, {
    method: "POST",
    body: JSON.stringify({ product, thumbnail }),
    cache: "no-store",
  });
};

export const deleteProduct = async (productId: number) => {
  await fetch(`${BASE_URL}/api/products/delete-product/${productId}`, {
    method: "DELETE",
    cache: "no-store",
  });
};

export const editProduct = async (product: ProductForm, id: number, thumbnail: string) => {
  await fetch(`${BASE_URL}/api/products/edit-product`, {
    method: "PUT",
    body: JSON.stringify({ product, id, thumbnail}),
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

// BLOGS

export const getBlogs = async () => {
  const res = await fetch(`${BASE_URL}/api/blogs/get-blogs`, {
    cache: "no-store",
  });
  const { blogs } = await res.json();

  return blogs.rows;
};

export const createBlog = async (blog: Blog, userId: number, thumbnail: string) => {
  await fetch(`${BASE_URL}/api/blogs/create-blog`, {
    method: "POST",
    body: JSON.stringify({ blog, userId, thumbnail }),
    cache: "no-store",
  });
};

export const deleteBlog = async (id: number) => {
  await fetch(`${BASE_URL}/api/blogs/delete-blog/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });
};

export const editBlog = async (blog: Blog, id: number, thumbnail: string) => {
  await fetch(`${BASE_URL}/api/blogs/edit-blog`, {
    method: "PUT",
    body: JSON.stringify({ blog, id, thumbnail }),
    cache: "no-store",
  });
};

// ORDERS

export const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/api/orders/get-orders`, {
    cache: "no-store",
  });
  const orders = await res.json();
  return orders;
};
