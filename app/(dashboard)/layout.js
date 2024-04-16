import Header from "@/components/RootLayout/Header";
import Footer from "@/components/RootLayout/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
