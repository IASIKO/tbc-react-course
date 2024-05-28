import ProductsList from "../../../../components/Products/ProductsList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import { getUserCartAction } from "../../../../lib/actions";
import { getProducts } from "../../../../lib/api";

export default async function Products({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const productsListData = await getProducts();
  const selectedProducts = await getUserCartAction();

  const loc = await getLocale();

  return (
    <>
      <TitleBgImage>{loc === "en" ? "Products" : "პროდუქტები"}</TitleBgImage>
      <ProductsList
        productListData={productsListData}
        selectedProducts={selectedProducts[0]?.products}
      />
      ;
    </>
  );
}
