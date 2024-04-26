import { getDictionary } from "../dictionaries";
import Header from "../../../components/RootLayout/header/Header";
import Footer from "../../../components/RootLayout/footer/Footer";
import { ReactNode } from "react";

interface Params {
  locale: string;
}

interface Props {
  children: ReactNode;
  params: Params;
}

export default async function DashboardRootLayout({
  children,
  params: { locale },
}: Props) {
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      {children}
      <Footer dict={dict}/>
    </>
  );
}
