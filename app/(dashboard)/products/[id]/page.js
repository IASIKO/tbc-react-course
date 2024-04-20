import ProductDetailsContent from "@/components/Products/ProductDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  const paths = products.products.map((product) => ({
    params: { id: `/blog/${product.id}` },
  }));
  return paths;
}

async function getProductById(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  return res.json();
}

export default async function ProductsDetails({ params }) {
  const product = await getProductById(params.id);
  return (
    <>
      <TitleBgImage>Product Details</TitleBgImage>
      <ProductDetailsContent productDetails={product} />
    </>
  );
}
