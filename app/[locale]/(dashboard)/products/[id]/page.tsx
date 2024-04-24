import ProductDetailsContent from "../../../../../components/Products/ProductDetailsContent";
import TitleBgImage from "../../../../../components/UI/TitleBgImage";
import { getDictionary } from "../../../dictionaries";

interface ProductsDetailsProps {
  params: {
    id: number;
    locale: string;
  };
}

interface Product {
  id: number;
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const products: { products: Product[] } = await res.json();
  const paths = products.products.map((product) => ({
    id: `/products/${product.id}`,
  }));
  return paths;
}

async function getProductById(productId: number) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  return res.json();
}

export default async function ProductsDetails({
  params: { id, locale },
}: ProductsDetailsProps) {
  const product = await getProductById(id);
  const dict = await getDictionary(locale);

  return (
    <>
      <TitleBgImage>{dict.products.singlePageTitle}</TitleBgImage>
      <ProductDetailsContent productDetails={product} dict={dict} />
    </>
  );
}
