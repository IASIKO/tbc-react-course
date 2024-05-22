import { unstable_setRequestLocale } from "next-intl/server";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import CheckoutTable from "../../../../components/checkout/CheckoutTable";
import { getUserCartAction } from "../../../../lib/actions";

export default async function Checkout({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);


  const userCart = await getUserCartAction();
  const cart = userCart[0].products
  console.log("🚀 ~ cart:", cart)

  const fetchProducts = async () => {
    const fetchProduct = async (id: number) => {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        cache: "no-store",
      });
      const data = await response.json();

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
      <TitleBgImage>My Cart</TitleBgImage>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto">
          <CheckoutTable selectedProducts={selectedProducts} />
        </div>
      </section>
    </>
  );
}
