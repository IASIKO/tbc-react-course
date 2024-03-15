import Footer from "./components/footer/Footer";
import Header from "./components/Header";
// import LandingContent from "./components/LandingContent";
import ProductsList from "./components/products/ProductsList";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="overflow-auto">
        {/* <LandingContent /> */}
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
