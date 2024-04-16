import ProductDetailsContent from "@/components/Products/ProductDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";
import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getProductById(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  return res.json();
}

export default async function ProductsDetails({ params }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) redirect("/login");

  const product = await getProductById(params.slug);
  return (
    <>
      <TitleBgImage>Product Details</TitleBgImage>
      <ProductDetailsContent productDetails={product} />
    </>
  );
}
