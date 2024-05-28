import { unstable_setRequestLocale } from "next-intl/server";
import ProductDetailsContent from "../../../../../components/Products/ProductDetailsContent";
import { getProducts } from "../../../../../lib/api";
import { Product } from "../../../../../types/products-types";

interface ProductsDetailsProps {
  params: {
    id: number;
    locale: string;
  };
}

// export async function generateStaticParams() {
//   const res = await fetch("https://dummyjson.com/products");
//   const products: { products: Product[] } = await res.json();
//   const paths = products.products.map((product) => ({
//     id: `/products/${product.id}`,
//   }));
//   return paths;
// }

export default async function ProductsDetails({
  params: { id, locale },
}: ProductsDetailsProps) {
  unstable_setRequestLocale(locale);

  const productsData = await getProducts();

  const product = productsData.find((product: Product) => product.id == id);

  return <ProductDetailsContent productDetails={product} />;
}
