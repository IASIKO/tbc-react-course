import { getDictionary } from "../dictionaries";
import Header from "../../../components/RootLayout/header/Header";
import Footer from "../../../components/RootLayout/footer/Footer";
import { ReactNode } from "react";

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
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      {children}
      <Footer dict={dict} />
    </>
  );
}
