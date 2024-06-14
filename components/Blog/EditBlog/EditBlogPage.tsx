"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BlogInfo, EditBlog } from "../../../types/blogs.type";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { editBlogAction } from "../../../lib/actions";
import ThemeLoader from "../../UI/ThemeLoader";
import EditBlogAvatar from "./EditBlogAvatar";
import { PutBlobResult } from "@vercel/blob";

const EditBlogPage = ({ blogInfo }: { blogInfo: BlogInfo }) => {
  const [blog, setBlog] = useState<EditBlog>({
    title: blogInfo.title,
    given_name: blogInfo.given_name.length
      ? blogInfo.given_name
      : blogInfo.email,
    description: blogInfo.description,
    thumbnail: blogInfo.thumbnail,
    ingredients: blogInfo.ingredients,
    instructions: blogInfo.instructions,
    prep_min: blogInfo.prep_min,
    picture: blogInfo.picture,
  });
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const router = useRouter();
  const t = useTranslations("addBlogPage");

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    const hasEmptyFields = Object.values(blog).some(
      (value) => value.toString().trim() === ""
    );
    setIsFormValid(!hasErrors && !hasEmptyFields);
  }, [errors, blog]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} is required`,
      }));
    } else {
      setErrors((prevErrors) => {
        const { [name]: removedError, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(blog).forEach((key) => {
      const value = blog[key as keyof EditBlog];
      if ((value ?? "").toString().trim() === "") {
        newErrors[key] = `${key} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    await editBlogAction(blog, blogInfo.id, blob ? blob.url : blog.thumbnail);
    router.push("/blog");
    setLoading(false);
  };

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <div className="p-[15px]">
          <h3 className="text-[25px] font-medium text-black dark:text-white">
            {t("editBlog")}
          </h3>
          <EditBlogAvatar
            blob={blob}
            setBlob={setBlob}
            thumbnail={blog.thumbnail}
          />
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-[100%] my-[10px]">
              <h2 className="text-black font-normal dark:text-white">
                {t("title")} <span className="text-red">*</span>
              </h2>
              <input
                type="text"
                name="title"
                value={blog.title}
                onChange={handleChange}
                className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                required
              />
              {errors.title && <span className="text-red">{errors.title}</span>}
            </div>

            <div className="flex flex-col w-[100%] my-[10px]">
              <h2 className="text-black font-normal dark:text-white">
                {t("description")} <span className="text-red">*</span>
              </h2>
              <textarea
                name="description"
                value={blog.description}
                onChange={handleChange}
                rows={4}
                required
                className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white resize-none"
              />
              {errors.description && (
                <span className="text-red">{errors.description}</span>
              )}
            </div>

            <div className="flex flex-col w-[100%] my-[10px]">
              <h2 className="text-black font-normal dark:text-white">
                {t("ingredients")} <span className="text-red">*</span>
              </h2>
              <textarea
                name="ingredients"
                value={blog.ingredients}
                onChange={handleChange}
                rows={4}
                required
                className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white resize-none"
              />
              {errors.ingredients && (
                <span className="text-red">{errors.ingredients}</span>
              )}
            </div>

            <div className="flex flex-col w-[100%] my-[10px]">
              <h2 className="text-black font-normal dark:text-white">
                {t("instructions")} <span className="text-red">*</span>
              </h2>
              <textarea
                name="instructions"
                value={blog.instructions}
                onChange={handleChange}
                rows={4}
                required
                className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white resize-none"
              />
              {errors.instructions && (
                <span className="text-red">{errors.instructions}</span>
              )}
            </div>

            <div className="flex flex-col w-[100%] my-[10px]">
              <h2 className="text-black font-normal dark:text-white">
                {t("prepTime")} <span className="text-red">*</span>
              </h2>
              <input
                type="number"
                name="prep_min"
                value={blog.prep_min}
                onChange={handleChange}
                min={0}
                className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                required
              />
              {errors.prep_min && (
                <span className="text-red">{errors.prep_min}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`p-[7px] px-[25px] border border-solid border-red text-[18px] text-white bg-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 sm:w-[300px] w-full mt-4 ${
                isFormValid
                  ? "hover:bg-lightred hover:text-white"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              {loading ? <ThemeLoader /> : t("editBlog")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditBlogPage;
