import { PiCurrencyDollarBold } from "react-icons/pi";
import { useTranslations } from "next-intl";
import RateStars from "../../RateStars";
import { Product, selectedProduct } from "../../../types/products-types";
import Reviews from "../Reviews";
import { AuthUser, ReviewsType } from "../../../types/profile-types";
import ProductDetailsActions from "./ProductDetailsActions";
import ProductDetailsImage from "./ProductDetailsImage";

export const revalidate = 0;

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
      <section className="py-12 dark:bg-gray">
        <div className="max-w-[1140px] container mx-auto px-4 lg:px-0">
          <div className="lg:flex">
            <ProductDetailsImage
              thumbnail={productDetails.thumbnail}
              title={productDetails.title}
            />
            <div className="lg:px-16 flex flex-col justify-between w-full lg:w-1/2">
              <h2 className="font-normal text-2xl lg:text-4xl dark:text-white mb-4">
                {productDetails.title}
              </h2>
              <div className="flex gap-2 items-center mb-4">
                <span className="text-red text-lg lg:text-xl flex gap-2 items-center font-bold">
                  {Math.round(starRating * 100) / 100}
                </span>
                <RateStars
                  defaultRating={Math.round(starRating)}
                  enable={false}
                  color="red"
                />
              </div>
              <span className="text-red text-2xl lg:text-3xl flex gap-2 items-center mb-4">
                {productDetails.price}
                <PiCurrencyDollarBold />
              </span>
              <div className="mb-4">
                <span className="italic font-bold dark:text-white">{t("category")}</span>
                <p>{productDetails.category}</p>
              </div>
              <div className="mb-4">
                <span className="italic font-bold dark:text-white">{t("brand")}</span>
                <p>{productDetails.brand}</p>
              </div>
              <div className="mb-4">
                <span className="italic font-bold dark:text-white">{t("description")}</span>
                <p>{productDetails.description}</p>
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
