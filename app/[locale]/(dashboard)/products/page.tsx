import ProductsList from "../../../../components/Products/ProductsList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function Products({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const productsListData = await getProducts();
  const loc = await getLocale();

  return (
    <>
      <TitleBgImage>{loc === "en" ? "Products" : "პროდუქტები"}</TitleBgImage>
      <ProductsList productListData={productsListData.products} />;
    </>
  );
}
