import LoginForm from "@/components/Login/LoginForm";
import AuthorizationLayout from "@/components/UI/AuthorizationLayout";
import { getDictionary } from "../dictionaries";

export default async function Login({ params: { locale } }) {
  const dict = await getDictionary(locale);
  
  return (
    <AuthorizationLayout>
      <LoginForm dict={dict}/>
    </AuthorizationLayout>
  );
}
