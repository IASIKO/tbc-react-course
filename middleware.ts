import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./constants";

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // Checking authentification
  if (
    !cookies().has(AUTH_COOKIE_KEY) &&
    (path === `/` ||
      path.startsWith(`/products`) ||
      path.startsWith(`/blog`) ||
      path === `/contact` ||
      path === `/about` ||
      path === `/profile`)
  ) {
    request.nextUrl.pathname = "/login";
  }

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
