import { useLocale } from "next-intl";
import ProductsList from "../../../../components/Products/ProductsList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function Products() {
  const productsListData = await getProducts();
  const locale = useLocale();

  return (
    <>
      <TitleBgImage>{locale === "en" ? "Products" : "პროდუქტები"}</TitleBgImage>
      <ProductsList productListData={productsListData.products} />;
    </>
  );
}
