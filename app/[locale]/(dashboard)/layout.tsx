import Header from "../../../components/RootLayout/header/Header";
import Footer from "../../../components/RootLayout/footer/Footer";
import { ReactNode } from "react";
import { unstable_setRequestLocale } from "next-intl/server";

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

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
