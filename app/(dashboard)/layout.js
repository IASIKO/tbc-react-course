import Header from "@/components/RootLayout/header/Header";
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
