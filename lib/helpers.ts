// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "@/constants";

import { BASE_URL } from "./api";


// export async function login(username, password) {
//   const res = await fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   });

//   const user = await res.json();

//   if (user.token) {
//     const cookieStore = cookies();
//     cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
//   } else {
//     throw new Error(user.message);
//   }
// }

// export async function logout() {
//   const cookieStore = cookies();
//   cookieStore.delete(AUTH_COOKIE_KEY);
// }
// import Negotiator from "negotiator";
// import { match } from "@formatjs/intl-localematcher";
// import { i18n } from "../i18.config";

// export const getLocale = (request: Request): string => {
//   const negotiationHeaders: { [key: string]: string } = {};

//   request.headers.forEach((value, key) => (negotiationHeaders[key] = value));

//   const languages = new Negotiator({ headers: negotiationHeaders }).languages();
//   const locales = i18n.locales;

//   const locale = match(languages, locales, i18n.defaultLocale);
//   return locale;
// };

// export const handleLoginRoute = async (username: string, password: string) => {
//   await fetch(`http://localhost:3000/api/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   });

// };

export const handleLoginRoute = async (username: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Username / Password is incorrect");
    }
  } catch (error) {
    throw new Error("Username / Password is incorrect");
  }
};

export const handleLogoutRoute = async () => {
  await fetch(`${BASE_URL}/api/logout`, {
    method: "POST",
  });
};


