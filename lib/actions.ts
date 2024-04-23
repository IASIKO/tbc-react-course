"use server";

import { LANG_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";

export const setLanguage = (lang) => {
  cookies().set(LANG_COOKIE_KEY, lang);
};
