import bg from "../../../public/Assets/images/bg_1.jpg";
// import test from '../../../public/Assets/images/test.png'
import Image from "next/image";
import LandingContent from "../../../components/Home/LandingContent";
import { unstable_setRequestLocale } from "next-intl/server";
import { getAuthUserAction, getUserCartAction } from "../../../lib/actions";
import { getProducts } from "../../../lib/api";
import { getSession } from "@auth0/nextjs-auth0";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
}

export const metadata = {
  title: "Liquor store - Home",
  description: "Landing page",
};

export default async function DashboardHome({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const session = await getSession();
  const sub = session?.user?.sub;

  const auth_user = await getAuthUserAction(sub);

  const blogListData = await getBlogs();
  const productListData = await getProducts();

  const selectedProducts = await getUserCartAction();

  return (
    <>
      <div
        className="relative h-screen w-ful"
        style={{
          clipPath: "inset(0 0 0 0)",
        }}
      >
        <div className="fixed h-full w-full left-0 top-0">
          <Image
            src={bg}
            alt="background image"
            priority={true}
            placeholder="blur"
            className="h-[100vh] object-none object-top"
          />
        </div>
      </div>
      <LandingContent
        blogListData={blogListData.recipes}
        productListData={productListData}
        selectedProducts={selectedProducts[0]?.products}
        authUser={auth_user?.auth_user.rows[0]}
      />
    </>
  );
}
