import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./constants";

export function middleware(request) {
  const cookieStore = cookies().get(AUTH_COOKIE_KEY);
  const { pathname } = request.nextUrl;
  if (!cookieStore?.value && !pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (cookieStore?.value && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
