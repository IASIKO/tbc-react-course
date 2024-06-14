import { useTranslations } from "next-intl";
import Image from "next/image";
import { BlogInfo } from "../../types/blogs.type";

interface BlogDetailsContentProps {
  blogDetails: BlogInfo;
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({
  blogDetails,
}) => {
  const t = useTranslations("blogs");

  return (
    <>
      <section className="py-16 dark:bg-gray-900">
        {blogDetails && (
          <div className="container mx-auto px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="lg:w-2/5">
                <img
                  src={blogDetails.thumbnail}
                  alt={`Thumbnail for ${blogDetails.title}`}
                  className="rounded-lg shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
              <div className="lg:w-3/5 mt-8 lg:mt-0">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                  {blogDetails.title}
                </h2>
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={blogDetails.picture}
                    alt={`Avatar of ${blogDetails.given_name}`}
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                  <div className="text-gray-600 dark:text-gray-400">
                    <p className="font-medium">{blogDetails.given_name}</p>
                    <p className="font-medium text-[16px]">{blogDetails.added_on.slice(0,10)}</p>
                  </div>
                </div>
                <p className="text-sm font-bold">{t("prepTime")}: {blogDetails.prep_min} {t("min")}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {blogDetails.description}
                </p>
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">
                    {t("ingredients")}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                    {blogDetails.ingredients}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">
                    {t("instructions")}
                  </h3>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300">
                    {blogDetails.instructions}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default BlogDetailsContent;
