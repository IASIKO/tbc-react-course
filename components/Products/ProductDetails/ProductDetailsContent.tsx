import { PiCurrencyDollarBold } from "react-icons/pi";
import TitleBgImage from "../../UI/TitleBgImage";
import { useTranslations } from "next-intl";
import RateStars from "../../RateStars";
import { Product, selectedProduct } from "../../../types/products-types";
import Reviews from "../Reviews";
import { AuthUser, ReviewsType } from "../../../types/profile-types";
import ProductDetailsActions from "./ProductDetailsActions";
import ProductDetailsImage from "./ProductDetailsImage";

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
      <section className="py-12 dark:bg-gray">
        <div className="max-w-[1140px] container mx-auto px-4 lg:px-0">
          <div className="lg:flex">
            <ProductDetailsImage
              thumbnail={productDetails.thumbnail}
              title={productDetails.title}
            />
            <div className="lg:px-16 flex flex-col justify-between">
              <h2 className="text-black font-normal text-2xl lg:text-4xl dark:text-white mb-4">
                {productDetails.title}
              </h2>
              <div className="flex gap-2 items-center mb-4">
                <span className="text-red text-lg lg:text-xl flex gap-2 items-center font-bold">
                  {Math.round(starRating * 10) / 10}
                </span>
                <RateStars
                  defaultRating={Math.round(starRating)}
                  enable={false}
                  color="red"
                />
              </div>
              <span className="text-black text-2xl lg:text-3xl flex gap-2 items-center dark:text-white mb-4">
                {productDetails.price}
                <PiCurrencyDollarBold />
              </span>
              <div className="mb-4">
                <span className="text-red italic font-bold">
                  {t("category")}
                </span>
                <p className="dark:text-white">{productDetails.category}</p>
              </div>
              <div className="mb-4">
                <span className="text-red italic font-bold">{t("brand")}</span>
                <p className="dark:text-white">{productDetails.brand}</p>
              </div>
              <div className="mb-4">
                <span className="text-red italic font-bold">
                  {t("description")}
                </span>
                <p className="dark:text-white">{productDetails.description}</p>
              </div>
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
