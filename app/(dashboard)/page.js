import LandingContent from "@/components/Home/LandingContent";
import bg from "../../public/Assets/images/bg_1.jpg";
import Image from "next/image";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function DashboardHome() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) redirect("/login");

  const blogListData = await getBlogs();
  const productListData = await getProducts();

  return (
    <>
      <Image
        src={bg}
        alt="background image"
        priority={true}
        placeholder="blur"
      />
      <LandingContent
        blogListData={blogListData.recipes}
        productListData={productListData.products}
      />
    </>
  );
}
