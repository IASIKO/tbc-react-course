import Footer from "@/components/RootLayout/footer/Footer";
import Header from "@/components/RootLayout/header/Header";
import { getDictionary } from "../dictionaries";


export default async function RootLayout({ children, params: { locale } }) {
  const dict = await getDictionary(locale);


  return (
    <>
      <Header dict={dict}/>
      {children}
      <Footer />
    </>
  );
}
