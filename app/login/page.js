"use server";

import LoginForm from "@/components/Login/LoginForm";
import AuthorizationLayout from "@/components/UI/AuthorizationLayout";
import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { login } from "../actions";

export default async function Login() {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  // if (cookie) redirect("/");

  const handleLogin = async (username, password) => {
    "use server";
    await login(username, password);
  };

  return (
    <AuthorizationLayout>
      <LoginForm handleLogin={handleLogin} />
    </AuthorizationLayout>
  );
}
