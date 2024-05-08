export const BASE_URL = "http://localhost:3000";

// USERS

export interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users/get-users`, { cache: 'no-store' });
  const { users } = await res.json();

  return users.rows;
};

export const createUser = async (name: string, email: string) => {
  await fetch(`${BASE_URL}/api/users/create-user`, {
    method: "POST",
    body: JSON.stringify({ name, email }),
  });
};

export const deleteUser = async (userId: number) => {
  await fetch(`${BASE_URL}/api/users/delete-user/${userId}`, {
    method: "DELETE",
  });
};

export const editUser = async (userId: number, name: string, email: string) => {
  await fetch(`${BASE_URL}/api/users/edit-user/${userId}`, {
    method: "PUT",
    body: JSON.stringify({ name, email }),
  });
};