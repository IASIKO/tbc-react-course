import { Outlet } from "react-router";
import Header from "../components/RootLayout/Header";
import Footer from "../components/RootLayout/footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
