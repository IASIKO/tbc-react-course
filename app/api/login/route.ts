import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../lib/constants";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await res.json();


  if (res.ok) {
    const cookieStore = cookies();
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(data.token));
    
  } else {
    throw new Error(data.message);
  }

  return Response.json({ username, password });
}
