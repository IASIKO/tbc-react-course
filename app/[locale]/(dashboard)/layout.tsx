import Header from "../../../components/RootLayout/header/Header";
import Footer from "../../../components/RootLayout/footer/Footer";
import { ReactNode } from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { getUserCartAction } from "../../../lib/actions";

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

  const selectedProducts = await getUserCartAction();

  return (
    <>
      <Header selectedProducts={selectedProducts[0]?.products}/>
      {children}
      <Footer />
    </>
  );
}
