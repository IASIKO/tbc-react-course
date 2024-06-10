import { unstable_setRequestLocale } from "next-intl/server";
import { getSession } from "@auth0/nextjs-auth0";
import {
  getAuthUserAction,
  getUserCartAction,
} from "../../../../../lib/actions";
import { getProducts } from "../../../../../lib/api";
import { Product } from "../../../../../types/products-types";
import Checkout from "../../../../../components/Cart/Checkout";

export const revalidate = 0;

export const metadata = {
  title: "Liquor store - Checkout",
  description: "Checkout page",
};

export default async function CheckoutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const userCart = await getUserCartAction();
  const cart = userCart[0]?.products;
  const productsListData = await getProducts();
  const session = await getSession();
  const sub = session?.user?.sub;

  const auth_user = await getAuthUserAction(sub);

  const fetchProducts = async () => {
    const fetchProduct = (id: number) => {
      const data = productsListData.find(
        (product: Product) => product.id === id
      );

      return data;
    };

    const arr = [];

    for (let index = 0; index < cart?.length; index++) {
      const singleProduct = await fetchProduct(cart[index].id);
      arr.push({ ...singleProduct, quantity: cart[index].quantity });
    }

    return arr;
  };

  const selectedProducts = await fetchProducts();

  return (
    <>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto p-8">
          <Checkout
            selectedProducts={selectedProducts}
            authUser={auth_user?.auth_user.rows[0]}
          />
        </div>
      </section>
    </>
  );
}
