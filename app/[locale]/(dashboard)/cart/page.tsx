import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getUserCartAction } from "../../../../lib/actions";
import { getProducts } from "../../../../lib/api";
import { Product } from "../../../../types/products-types";
import CartTable from "../../../../components/Cart/CartTable";

export const revalidate = 0;

export const metadata = {
  title: "Liquor store - Cart",
  description: "Cart page",
};

export default async function Cart({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const loc = await getLocale();
  const userCart = await getUserCartAction();
  const cart = userCart[0]?.products;
  const productsListData = await getProducts();

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
      <TitleBgImage>{loc === "en" ? "My Cart" : "კალათა"}</TitleBgImage>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto">
          <CartTable selectedProducts={selectedProducts} />
        </div>
      </section>
    </>
  );
}
