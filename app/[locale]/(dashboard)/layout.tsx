import { getDictionary } from "../dictionaries";
import Header from "../../../components/RootLayout/header/Header";
import Footer from "../../../components/RootLayout/footer/Footer";


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
