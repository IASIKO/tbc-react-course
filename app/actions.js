"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/constants";

export async function login(username, password) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const user = await res.json();

  if (user.token) {
    const cookieStore = cookies();
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
  } else {
    throw new Error(user.message);
  }
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);
}