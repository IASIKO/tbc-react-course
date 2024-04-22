import LandingContent from "@/components/Home/LandingContent";
import bg from "../../../public/Assets/images/bg_1.jpg";
import Image from "next/image";
import { getDictionary } from "../dictionaries";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function DashboardHome({params: { locale }}) {
  const blogListData = await getBlogs();
  const productListData = await getProducts();
  const dict = await getDictionary(locale);


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
        dict={dict}
      />
    </>
  );
}
