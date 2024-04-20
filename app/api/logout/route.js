import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";

export async function POST() {
  cookies().delete(AUTH_COOKIE_KEY);
  return Response.json({ message: "success" });
}
