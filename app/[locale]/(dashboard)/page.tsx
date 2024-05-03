import bg from "../../../public/Assets/images/bg_1.jpg";
import Image from "next/image";
import LandingContent from "../../../components/Home/LandingContent";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function DashboardHome() {
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
