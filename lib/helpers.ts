import { BASE_URL } from "./api";


export const handleLoginRoute = async (username: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Username / Password is incorrect");
    }
  } catch (error) {
    throw new Error("Username / Password is incorrect");
  }
};

export const handleLogoutRoute = async () => {
  await fetch(`${BASE_URL}/api/logout`, {
    method: "POST",
  });
};


