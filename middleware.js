import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./constants";

export function middleware(request) {
  if (!cookies().has(AUTH_COOKIE_KEY)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/products",
    "/products/(.*)",
    "/blog",
    "/blog/(.*)",
    "/contact",
    "/profile",
    "/about",
  ],
};
