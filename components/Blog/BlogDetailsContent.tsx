import { useTranslations } from "next-intl";
import Image from "next/image";
import TitleBgImage from "../UI/TitleBgImage";

interface BlogDetails {
  image: string;
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface BlogDetailsContentPops {
  blogDetails: BlogDetails;
}

const BlogDetailsContent: React.FC<BlogDetailsContentPops> = ({
  blogDetails,
}) => {
  const t = useTranslations("blogs");

  return (
    <>
      <TitleBgImage>{t("singlePageTitle")}</TitleBgImage>
      <section className="py-[60px] dark:bg-gray">
        {blogDetails !== undefined && (
          <div className="w-[1140px] m-auto">
            <div className="flex">
              <Image
                src={blogDetails.image}
                alt={`blog image ${blogDetails.name}`}
                className="w-[500px] h-auto"
                width={500}
                height={500}
              />
              <div className="px-[30px]">
                <h2 className="text-black font-normal text-[35px] dark:text-white">
                  {blogDetails.name}
                </h2>
                <span className="text-red italic font-bold">
                  {" "}
                  {t("ingredients")}
                </span>
                <p className="dark:text-white">
                  {blogDetails.ingredients &&
                    blogDetails.ingredients.map((ingredient, index) => (
                      <span key={index}>{ingredient}, </span>
                    ))}
                </p>
                <span className="text-red italic font-bold">
                  {t("instructions")}
                </span>
                <p className="dark:text-white">
                  {blogDetails.instructions &&
                    blogDetails.instructions.map((instruction, index) => (
                      <span key={index}>{instruction} </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default BlogDetailsContent;
