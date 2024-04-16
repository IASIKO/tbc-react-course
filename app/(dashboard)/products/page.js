import ProductsList from "@/components/Products/ProductsList";
import TitleBgImage from "@/components/UI/TitleBgImage";
import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function Products() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) redirect("/login");

  const productsListData = await getProducts();

  return (
    <>
      <TitleBgImage>Products</TitleBgImage>

      <ProductsList productListData={productsListData.products} />
    </>
  );
}
