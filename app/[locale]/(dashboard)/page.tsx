import bg from "../../../public/Assets/images/bg_1.jpg";
// import test from '../../../public/Assets/images/test.png'  
import Image from "next/image";
import LandingContent from "../../../components/Home/LandingContent";
import { unstable_setRequestLocale } from "next-intl/server";
import { getUserCartAction } from "../../../lib/actions";
import { getProducts } from "../../../lib/api";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export default async function DashboardHome({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const blogListData = await getBlogs();
  const productListData = await getProducts();

  const selectedProducts = await getUserCartAction();

  return (
    <>
      <Image
        src={bg}
        alt="background image"
        priority={true}
        placeholder="blur"
        className="h-[100vh] object-none object-top"
      />
      <LandingContent
        blogListData={blogListData.recipes}
        productListData={productListData}
        selectedProducts={selectedProducts[0]?.products}
      />
    </>
  );
}
