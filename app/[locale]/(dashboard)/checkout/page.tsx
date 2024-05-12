import { unstable_setRequestLocale } from "next-intl/server";
import TitleBgImage from "../../../../components/UI/TitleBgImage";

export default function Checkout({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <TitleBgImage>Checkout</TitleBgImage>
      <section className="py-[60px] dark:bg-gray">
        <div className="max-w-[1140px] m-auto">
            
        </div>
      </section>
    </>
  );
}
