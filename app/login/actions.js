"use server";

import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";

export async function login(email, password) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const user = await res.json();

  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
}
