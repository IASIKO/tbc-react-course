import Footer from "./components/footer/Footer";
import Header from "./components/Header";
// import LandingContent from "./components/LandingContent";
import ProductsList from "./components/products/ProductsList";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <LandingContent /> */}
      <main className="flex-[1_0_100%] overflow-y-auto">
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
