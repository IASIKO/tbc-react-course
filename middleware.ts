import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "./lib/constants";

export default async function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  // Checking authentification
  // if (!cookies().has(AUTH_COOKIE_KEY) && pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // if (cookies().has(AUTH_COOKIE_KEY) && pathname === "/login") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // Rewriting on the supported language
  const localeRewrite = createIntlMiddleware({
    locales: ["en", "ka"],
    defaultLocale: "en",
    localePrefix: "never",
  });
  const response = localeRewrite(request);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
