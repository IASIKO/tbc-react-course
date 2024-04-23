import { cookies } from "next/headers";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { AUTH_COOKIE_KEY } from "../constants";
import { i18n } from "../i18.config";

export function Authorization(middleware: NextMiddleware) {
  return async function (request: NextRequest, event: NextFetchEvent) {
    const en = i18n.locales[0];
    const ka = i18n.locales[1];
    const pathname = request.nextUrl.pathname;
    const hasAuthCookie = cookies().has(AUTH_COOKIE_KEY);

    if (
      !hasAuthCookie &&
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
    if (
      hasAuthCookie &&
      (pathname === `/${en}/login` || pathname === `/${ka}/login`)
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return middleware(request, event);
  };
}
