

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { i18n } from "../i18.config";
import { getLocale } from "@/lib/helpers";

export function Internationalization(middleware) {
  return async function (request) {
    const { pathname } = request.nextUrl;
    const cookieStore = cookies().get("lng")?.value;
    const pathHasLocale = i18n.locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    if (!pathHasLocale) {
      const newLocale = cookieStore || getLocale(request);
      request.nextUrl.pathname = `/${newLocale}${pathname}`;
      return NextResponse.redirect(request.nextUrl);
    }

    return middleware(request);
  };
}