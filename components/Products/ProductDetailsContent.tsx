import Image from "next/image";
import { PiCurrencyDollarBold } from "react-icons/pi";
import TitleBgImage from "../UI/TitleBgImage";
import { useTranslations } from "next-intl";
import RateStars from "../RateStars";
import { Product, selectedProduct } from "../../types/products-types";
import ProductDetailsActions from "./ProductDetailsActions";
import Reviews from "./Reviews";
import { AuthUser, ReviewsType } from "../../types/profile-types";

interface ProductDetailsContentProps {
  productDetails: Product;
  selectedProduct: selectedProduct;
  reviews: ReviewsType[];
  authUser: AuthUser;
}

const ProductDetailsContent: React.FC<ProductDetailsContentProps> = ({
  productDetails,
  selectedProduct,
  reviews,
  authUser,
}) => {
  const t = useTranslations("products");

  const starReviewsSum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  const starRating =
    (Number(productDetails.rating) + starReviewsSum) / (reviews.length + 1);

  return (
    <>
      <TitleBgImage>{t("singlePageTitle")}</TitleBgImage>
      <section className="py-[60px] dark:bg-gray">
        <div className="w-[1140px] m-auto">
          <div className="flex">
            <Image
              src={productDetails.thumbnail}
              alt={productDetails.title}
              className="w-[400px] h-[600px]"
              width={400}
              height={600}
            />
            <div className="px-[60px] flex flex-col justify-between">
              <h2 className="text-black font-normal text-[32px] dark:text-white">
                {productDetails.title}
              </h2>
              <div className="flex gap-2 items-center">
                <span className="text-red text-[18px] flex gap-2 items-center font-bold">
                  {Math.round(starRating * 10) / 10}
                </span>
                <RateStars
                  defaultRating={Math.round(starRating)}
                  enable={false}
                  color="red"
                />
              </div>
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
              <ProductDetailsActions
                selectedProduct={selectedProduct}
                productDetails={productDetails}
              />
            </div>
          </div>
          <Reviews
            productDetails={productDetails}
            reviews={reviews}
            authUser={authUser}
            starRating={starRating}
          />
        </div>
      </section>
    </>
  );
};

export default ProductDetailsContent;
