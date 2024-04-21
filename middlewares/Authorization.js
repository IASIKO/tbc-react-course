import { AUTH_COOKIE_KEY } from "@/constants";
import { i18n } from "@/i18.config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function Authorization(middleware) {
  return async function (request) {
    const ka = i18n.locales[0];
    const en = i18n.locales[1];
    const pathname = request.nextUrl.pathname;

    if (
      !cookies().has(AUTH_COOKIE_KEY) &&
      (pathname === `/${en}` ||
        pathname.startsWith(`/${en}/products`) ||
        pathname.startsWith(`/${en}/blog`) ||
        pathname === `/${en}/contact` ||
        pathname === `/${en}/about` ||
        pathname === `/${en}/profile` ||
        pathname === `/${ka}` ||
        pathname.startsWith(`/${ka}/products`) ||
        pathname.startsWith(`/${ka}/blog`) ||
        pathname === `/${ka}/contact` ||
        pathname === `/${ka}/about` ||
        pathname === `/${ka}/profile`)
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return middleware(request);
  };
}
