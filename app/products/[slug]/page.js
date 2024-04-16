import ProductDetailsContent from "@/components/Products/ProductDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";

async function getProductById(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  return res.json();
}

export default async function ProductsDetails({ params }) {
  const product = await getProductById(params.slug);
  return (
    <>
      <TitleBgImage>Product Details</TitleBgImage>
      <ProductDetailsContent productDetails={product} />
    </>
  );
}
