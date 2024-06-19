import test from "../../../public/Assets/images/test.jpg";
import testMobile from "../../../public/Assets/images/test-mobile.jpg";
import Image from "next/image";
import LandingContent from "../../../components/Home/LandingContent";
import { unstable_setRequestLocale } from "next-intl/server";
import { getAuthUserAction, getUserCartAction } from "../../../lib/actions";
import { getBlogs, getProducts } from "../../../lib/api";
import { getSession } from "@auth0/nextjs-auth0";

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
        className="relative h-screen w-full"
        style={{
          clipPath: "inset(0 0 0 0)",
        }}
      >
        <div className="fixed h-full w-full left-0 top-0">
          <Image
            src={test}
            alt="background image"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-left-bottom -scale-x-100 hidden sm:block"
            priority={true}
          />
          <Image
            src={testMobile}
            alt="background image for mobile"
            width={360}
            height={760}
            className="w-full h-full object-cover object-left-bottom -scale-x-100 block sm:hidden"
            priority={true}
          />
        </div>
      </div>
      <LandingContent
        blogListData={blogListData}
        productListData={productListData}
        selectedProducts={selectedProducts[0]?.products}
        authUser={auth_user?.auth_user.rows[0]}
      />
    </>
  );
}
