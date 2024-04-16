import LoginForm from "@/components/Login/LoginForm";
import AuthorizationLayout from "@/components/UI/AuthorizationLayout";

export default async function Login() {
  return (
    <AuthorizationLayout>
      <LoginForm />
    </AuthorizationLayout>
  );
}
