import Image from "next/image";
import { PiCurrencyDollarBold } from "react-icons/pi";
import TitleBgImage from "../UI/TitleBgImage";
import { useTranslations } from "next-intl";
import RateStars from "../RateStars";

interface ProductDetails {
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
  category: string;
  brand: string;
  description: string;
}

interface ProductDetailsContentProps {
  productDetails: ProductDetails;
}

const ProductDetailsContent: React.FC<ProductDetailsContentProps> = ({
  productDetails,
}) => {
  const t = useTranslations("products");

  return (
    <>
      <TitleBgImage>{t("singlePageTitle")}</TitleBgImage>
      <section className="py-[60px] dark:bg-gray">
        <div className="w-[1140px] m-auto">
          <div className="flex">
            <Image
              src={productDetails.thumbnail}
              alt={productDetails.title}
              className="w-[500px] h-auto"
              width={500}
              height={700}
            />
            <div className="px-[60px]">
              <h2 className="text-black font-normal text-[32px] dark:text-white">
                {productDetails.title}
              </h2>
              <span className="text-red text-[18px] flex gap-2 items-center font-bold">
                {productDetails.rating}
              </span>
              <RateStars defaultRating={Math.round(productDetails.rating*2)/2} />
              <span className="text-black text-[32px] flex gap-2 items-center dark:text-white">
                {productDetails.price}
                <PiCurrencyDollarBold />
              </span>
              <span className="text-red italic font-bold">{t("category")}</span>
              <p className="dark:text-white">{productDetails.category}</p>
              <span className="text-red italic font-bold">{t("brand")}</span>
              <p className="dark:text-white">{productDetails.brand}</p>
              <span className="text-red italic font-bold">
                {t("description")}
              </span>
              <p className="dark:text-white">{productDetails.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsContent;
