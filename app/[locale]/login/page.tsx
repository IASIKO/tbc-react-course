import { unstable_setRequestLocale } from "next-intl/server";
import LoginForm from "../../../components/Login/LoginForm";
import AuthorizationLayout from "../../../components/UI/AuthorizationLayout";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../constants";
import { redirect } from "next/navigation";

export default async function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  if (cookies().has(AUTH_COOKIE_KEY)) {
    redirect(`/`); // possible to redirect to the previous requested page
  }

  return (
    <AuthorizationLayout>
      <LoginForm  />
    </AuthorizationLayout>
  );
}
