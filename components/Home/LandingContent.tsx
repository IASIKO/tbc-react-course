import ProductsList from "../Products/ProductsList";
import Button from "../UI/Button";
import Link from "next/link";
import BlogList from "../Blog/BlogList";
import { useTranslations } from "next-intl";
import { Product, ProductObject } from "../../types/products-types";
import ExperienceSection from "../About/ExperienceSection";
import CategoriesSection from "../About/CategoriesSection";
import { AuthUser } from "../../types/profile-types";
import { BlogInfo } from "../../types/blogs.type";



interface LandingContentProps {
  blogListData: BlogInfo[];
  productListData: Product[];
  selectedProducts: ProductObject[];
  authUser: AuthUser
}

const LandingContent: React.FC<LandingContentProps> = ({
  blogListData,
  productListData,
  selectedProducts,
  authUser
}) => {
  const t = useTranslations();
  const homeBlogListData = blogListData.slice(0, 3);
  const homeProductsListData = productListData.slice(0, 4);

  return (
    <>
      {/* <div className="absolute top-[48px] right-0 -bottom-[50px] left-0 opacity-20 bg-black"></div> */}
      <h1 className="textStroke absolute top-1/2 left-[20px]  -translate-y-1/2 text-[90px] leading-tight font-bold italic">
        <div className="py-[30px] rotate-[-4deg] text-center w-[560px] m-auto">
          Good <span className="text-white">Drink</span> for Good{" "}
          <span className="text-white">Moments</span>.
          <p className="font-normal text-[20px] text-[#ffffff] py-[20px] leading-normal">
            <a
              href="#"
              className="cursor-pointer mr-[10px] bg-[#b7472a] border-[#b7472a] text-white rounded-[3px] py-[5px] px-[15px]"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="cursor-pointer mr-[10px] bg-transparent border-white border-[1px] border-solid text-white rounded-[3px] py-[5px] px-[15px]"
            >
              Read more
            </a>
          </p>
        </div>
      </h1>

      <ExperienceSection />
      <CategoriesSection productListData={productListData}/>

      <section className="dark:bg-gray">
        <ProductsList
          productListData={homeProductsListData}
          selectedProducts={selectedProducts}
          authUser={authUser}
        />
        <div className="flex justify-center pb-[60px]">
          <Link href="/products">
            <Button>{t("products.viewAllProducts")}</Button>
          </Link>
        </div>
      </section>

      <section className="dark:bg-gray pb-[60px]">
        <BlogList blogListData={homeBlogListData} />
        <div className="flex justify-center">
          <Link href="/blog">
            <Button>{t("blogs.seeMore")}</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingContent;
