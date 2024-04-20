import Footer from "@/components/RootLayout/footer/Footer";
import Header from "@/components/RootLayout/header/Header";


export default function RootLayout({ children }) {


  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
