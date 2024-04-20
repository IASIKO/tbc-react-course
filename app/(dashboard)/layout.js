import Header from "@/components/RootLayout/header/Header";
import Footer from "@/components/RootLayout/footer/Footer";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";

export default function RootLayout({ children }) {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  // if (!cookie) redirect("/login");

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
