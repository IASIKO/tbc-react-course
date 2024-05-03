import Header from "../../../components/RootLayout/header/Header";
import Footer from "../../../components/RootLayout/footer/Footer";
import { ReactNode } from "react";

interface DashboardLaoyoutProps {
  children: ReactNode;
}

export default async function DashboardRootLayout({
  children,
}: DashboardLaoyoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
