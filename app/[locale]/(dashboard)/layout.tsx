import Header from "../../../components/RootLayout/header/Header";
import Footer from "../../../components/RootLayout/footer/Footer";
import { ReactNode } from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { getAuthUserAction, getUserCartAction } from "../../../lib/actions";
import { getSession } from "@auth0/nextjs-auth0";


interface DashboardLaoyoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function DashboardRootLayout({
  children,
  params: { locale },
}: DashboardLaoyoutProps) {
  unstable_setRequestLocale(locale);

  const session = await getSession();
  const sub = session?.user?.sub;

  const auth_user = await getAuthUserAction(sub);
  const selectedProducts = await getUserCartAction();

  return (
    <>
      <Header selectedProducts={selectedProducts[0]?.products} authUser={auth_user?.auth_user.rows[0]}/>
      <main className="h-full">{children}</main>
      <Footer />
    </>
  );
}
