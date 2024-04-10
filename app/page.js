import LandingContent from "@/components/Home/LandingContent";
import { Suspense } from "react";
import Loading from "./loading";
import bg from "../public/Assets/images/bg_1.jpg";
import Image from "next/image";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function Home() {
  const blogListData = await getBlogs();
  const productListData = await getProducts();

  return (
    <>
      <Image src={bg} alt="background image" priority={true} />
      <Suspense fallback={<Loading />}>
        <LandingContent
          blogListData={blogListData.recipes}
          productListData={productListData.products}
        />
        ;
      </Suspense>
    </>
  );
}
