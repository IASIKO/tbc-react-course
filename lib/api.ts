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

// CARTS



export async function createUserCart(user_id: number, prod_id: number) {
  return await fetch(`${BASE_URL}/api/carts/create-cart`, {
    method: "POST",
    body: JSON.stringify({ user_id: user_id, prod_id: prod_id }),
  });
}
