import ProductsList from "../Products/ProductsList";
import Link from "next/link";
import BlogList from "../Blog/BlogList";
import { useTranslations } from "next-intl";
import { Product, ProductObject } from "../../types/products-types";
import ExperienceSection from "../About/ExperienceSection";
import { AuthUser } from "../../types/profile-types";
import { BlogInfo } from "../../types/blogs.type";
import PartnersSlider from "../About/PartnersSlider";

interface LandingContentProps {
  blogListData: BlogInfo[];
  productListData: Product[];
  selectedProducts: ProductObject[];
  authUser: AuthUser;
}

const LandingContent: React.FC<LandingContentProps> = ({
  blogListData,
  productListData,
  selectedProducts,
  authUser,
}) => {
  const t = useTranslations();
  const homeBlogListData = blogListData.slice(0, 3);
  const homeProductsListData = productListData.slice(0, 4);

  return (
    <>
      <h1 className="textStroke absolute top-1/3 lg:top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[30px] -translate-y-1/2 text-[25px] sm:text-[45px] md:text-[60px] lg:text-[90px] leading-tight font-bold italic">
        <div className="py-[30px] rotate-[-4deg] text-center w-[300px] sm:w-[300px] md:w-[400px] lg:w-[560px] m-auto ">
          {t("slogan.good")}{" "}
          <span className="text-gray-dark">{t("slogan.drinks")} </span>
          {t("slogan.forGood")}{" "}
          <span className="text-gray-dark">{t("slogan.moments")}</span>.
          <p className="font-normal text-[20px] text-[#ffffff] py-[20px] leading-normal">
            <Link
              href="/products"
              className="cursor-pointer mr-[10px] bg-gray-dark border-gray-dark text-white rounded-[3px] py-[5px] px-[15px]"
            >
              {t("slogan.shopNow")}
            </Link>
            <Link
              href="/about"
              className="cursor-pointer mr-[10px] bg-transparent border-gray-dark border-[1px] border-solid text-gray-dark rounded-[3px] py-[5px] px-[15px]"
            >
              {t("slogan.readMore")}
            </Link>
          </p>
        </div>
      </h1>

      <ExperienceSection />

      <section className="dark:bg-gray">
        <ProductsList
          productListData={homeProductsListData}
          selectedProducts={selectedProducts}
          authUser={authUser}
        />
        <div className="flex justify-center pb-[60px]">
          <Link
            href="/products"
            className="p-[7px] px-6 border border-solid border-red text-[18px] text-white bg-red font-medium align-middle duration-300 uppercase gap-2 hover:bg-white hover:text-red w-[300px] text-center"
          >
            {t("products.viewAllProducts")}
          </Link>
        </div>
      </section>

      <section className="dark:bg-gray pb-[60px]">
        <BlogList blogListData={homeBlogListData} authUser={authUser} />
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="p-[7px] px-6 border border-solid border-red text-[18px] text-white bg-red font-medium align-middle duration-300 uppercase gap-2 hover:bg-white hover:text-red w-[300px] text-center"
          >
            {t("blogs.seeMore")}
          </Link>
        </div>
      </section>
      <PartnersSlider />
    </>
  );
};

export default LandingContent;
