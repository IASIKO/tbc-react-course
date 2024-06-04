import { unstable_setRequestLocale } from "next-intl/server";
import ProductDetailsContent from "../../../../../components/Products/ProductDetailsContent";
import { getProducts } from "../../../../../lib/api";
import { Product, selectedProduct } from "../../../../../types/products-types";
import { getUserCartAction } from "../../../../../lib/actions";

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
  const selectedProducts = await getUserCartAction()
  const selectedProduct = selectedProducts[0]?.products.find((item: selectedProduct) => {
    return item.id == id
  })
  const product = productsData.find((product: Product) => product.id == id);


  return <ProductDetailsContent productDetails={product} selectedProduct={selectedProduct}/>;
}
