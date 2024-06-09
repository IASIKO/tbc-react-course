import ProductsList from "../../../../components/Products/ProductsList";
import { unstable_setRequestLocale } from "next-intl/server";
import { getAuthUserAction, getUserCartAction } from "../../../../lib/actions";
import { getProducts } from "../../../../lib/api";
import { getSession } from "@auth0/nextjs-auth0";

export const metadata = {
  title: "Liquor store - Products",
  description: "Products page",
};

export default async function Products({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const session = await getSession();
  const sub = session?.user?.sub;

  const auth_user = await getAuthUserAction(sub);

  const productsListData = await getProducts();
  const selectedProducts = await getUserCartAction();


  return (
    <>
      <ProductsList
        productListData={productsListData}
        selectedProducts={selectedProducts[0]?.products}
        authUser={auth_user?.auth_user.rows[0]}
      />
    </>
  );
}
