import { unstable_setRequestLocale } from "next-intl/server";
import LoginForm from "../../../components/Login/LoginForm";
import AuthorizationLayout from "../../../components/UI/AuthorizationLayout";
import { BASE_URL } from "../../../lib/api";

export default async function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <AuthorizationLayout>
      <LoginForm />
    </AuthorizationLayout>
  );
}
