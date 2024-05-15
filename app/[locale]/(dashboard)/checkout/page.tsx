import { unstable_setRequestLocale } from "next-intl/server";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import CheckoutTable from "../../../../components/checkout/CheckoutTable";

export default function Checkout({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <TitleBgImage>My Cart</TitleBgImage>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto">
          <CheckoutTable />
        </div>
      </section>
    </>
  );
}
