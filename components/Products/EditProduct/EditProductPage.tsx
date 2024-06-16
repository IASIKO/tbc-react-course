"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { editProductAction } from "../../../lib/actions";
import { Product, EditProductForm } from "../../../types/products-types";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import ThemeLoader from "../../UI/ThemeLoader";
import { PutBlobResult } from "@vercel/blob";
import EditProductAvatar from "./EditProductAvatar";

const EditProductPage = ({ productInfo }: { productInfo: Product }) => {
  const [product, setProduct] = useState<EditProductForm>({
    title: productInfo.title,
    category: productInfo.category,
    description: productInfo.description,
    price: productInfo.price,
    discount: productInfo.discount,
    rating: productInfo.rating,
    stock: productInfo.stock,
    brand: productInfo.brand,
    weight: productInfo.weight,
    thumbnail: productInfo.thumbnail,
  });

  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const t = useTranslations("addProduct");

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    const hasEmptyFields = Object.values(product).some(
      (value) => value.toString().trim() === ""
    );
    setIsFormValid(!hasErrors && !hasEmptyFields);
  }, [errors, product]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
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
    Object.keys(product).forEach((key) => {
      if (product[key as keyof EditProductForm].toString().trim() === "") {
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
   
      await editProductAction(product, productInfo.id, blob? blob.url : product.thumbnail);
    router.push("/products");
    setLoading(false);
  };

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <div className="p-[15px]">
          <h3 className="text-[25px] font-medium text-black dark:text-white">
            {t("editProduct")}
          </h3>
          <EditProductAvatar
            blob={blob}
            setBlob={setBlob}
            thumbnail={product.thumbnail}
          />
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5 flex-col sm:flex-row">
              <div className="flex flex-col w-full sm:w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("title")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  required
                />
                {errors.title && (
                  <span className="text-red">{errors.title}</span>
                )}
              </div>
              <div className="flex flex-col w-full sm:w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("category")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  required
                />
                {errors.category && (
                  <span className="text-red">{errors.category}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col w-[100%] my-[10px]">
              <h2 className="text-black font-normal dark:text-white">
                {t("description")}
                <span className="text-red">*</span>
              </h2>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                rows={4}
                cols={50}
                required
                className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white resize-none"
              />
              {errors.description && (
                <span className="text-red">{errors.description}</span>
              )}
            </div>

            <div className="flex gap-5 flex-col sm:flex-row">
              <div className="flex flex-col w-full sm:w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("stock")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  min={0}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  required
                />
                {errors.stock && (
                  <span className="text-red">{errors.stock}</span>
                )}
              </div>
              <div className="flex flex-col w-full sm:w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("brand")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={handleChange}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  required
                />
                {errors.brand && (
                  <span className="text-red">{errors.brand}</span>
                )}
              </div>
            </div>
            <div className="flex gap-5 flex-col sm:flex-row">
              <div className="flex flex-col w-full sm:w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("weight")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="weight"
                  value={product.weight}
                  onChange={handleChange}
                  min={50}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  required
                />
                {errors.weight && (
                  <span className="text-red">{errors.weight}</span>
                )}
              </div>
              <div className="flex flex-col w-full sm:w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("price")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  min={0.01}
                  step={0.01}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  required
                />
                {errors.price && (
                  <span className="text-red">{errors.price}</span>
                )}
              </div>
            </div>
            <div className="flex gap-5 flex-col sm:flex-row">
              <div className="flex flex-col w-full sm:w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("discount")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="discount"
                  value={product.discount}
                  onChange={handleChange}
                  min={0}
                  required
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                />
                {errors.discount && (
                  <span className="text-red">{errors.discount}</span>
                )}
              </div>
              <div className="flex flex-col w-full sm:w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("rating")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="rating"
                  value={product.rating}
                  onChange={handleChange}
                  disabled
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                />
                {errors.rating && (
                  <span className="text-red">{errors.rating}</span>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`p-[7px] px-[25px] border border-solid border-red text-[18px] text-white bg-red hover:bg-lightred font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 sm:w-[300px] w-full mt-4 ${
                isFormValid
                  ? "hover:bg-red hover:text-white"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              {loading ? <ThemeLoader /> : t("editProduct")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProductPage;
