import Header from "@/components/RootLayout/Header";
import Footer from "@/components/RootLayout/footer/Footer";

export default function DashboardRootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
