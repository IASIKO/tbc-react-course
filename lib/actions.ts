"use server";

import { cookies } from "next/headers";
import { LANG_COOKIE_KEY } from "../constants";

export const setLanguage = (lang: string) => {
  cookies().set(LANG_COOKIE_KEY, lang);
};
