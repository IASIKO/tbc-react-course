import ProductDetailsContent from "@/components/Products/ProductDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";
import { Suspense } from "react";
import Loading from "../loading";

async function getProductById(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  return res.json();
}

export default async function ProductsDetails({ params }) {
  const product = await getProductById(params.slug);
  return (
    <>
      <TitleBgImage>Products Details</TitleBgImage>
      <Suspense fallback={<Loading />}>
        <ProductDetailsContent productDetails={product} />
      </Suspense>
    </>
  );
}
