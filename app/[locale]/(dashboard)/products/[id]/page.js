import { getDictionary } from "@/app/[locale]/dictionaries";
import ProductDetailsContent from "@/components/Products/ProductDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  const paths = products.products.map((product) => ({
    params: { id: `/products/${product.id}` },
  }));
  return paths;
}

async function getProductById(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  return res.json();
}

export default async function ProductsDetails({ params: {id, locale} }) {

  const product = await getProductById(id);
  const dict = await getDictionary(locale);

  return (
    <>
      <TitleBgImage>{dict.products.singlePageTitle}</TitleBgImage>
      <ProductDetailsContent productDetails={product} dict={dict}/>
    </>
  );
}
