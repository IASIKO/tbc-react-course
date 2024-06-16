import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";
import { checkAdmin } from "./lib/api";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Checking authentification
  const res = NextResponse.next();

  const session = await getSession(request, res);
  const sub = session?.user?.sub;

  const protectedRoutes = [
    "/admin",
    "/products/add-product",
    "/blog/add-blog",
    "/profile",
    "/orders",
    "/orders/cancel",
    "/orders/success",
  ];

  const isProtectedRoute = protectedRoutes.includes(pathname);

  if (
    !sub &&
    (isProtectedRoute ||
      pathname.startsWith("/products/edit-product") ||
      pathname.startsWith("/blog/edit-blog"))
  ) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  } else {
    const role = await checkAdmin(sub);
    const isAdmin = role === "admin" ? true : false;
    const adminProtectedRoutes = ["/admin", "/products/add-product"];
    const isAdminProtectedRoute = adminProtectedRoutes.includes(pathname);
    if (
      (!isAdmin && isAdminProtectedRoute) ||
      pathname.startsWith("/products/edit-product")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  // if () && pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
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
