import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";

export async function POST(request) {
  const { username, password } = await request.json();

  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const user = await res.json();


  if (res.ok) {
    const cookieStore = cookies();
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token));
  } else {
    throw new Error(user.message);
  }

  return Response.json({ username, password });
}