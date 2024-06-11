"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createProductAction } from "../../lib/actions";
import { ProductForm } from "../../types/products-types";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import ThemeLoader from "../UI/ThemeLoader";

const AddProductPage = () => {
  const [product, setProduct] = useState<ProductForm>({
    title: "",
    category: "",
    description: "",
    price: 0,
    discount: 0,
    rating: 5,
    stock: 0,
    brand: "",
    weight: 50,
    thumbnail: "",
  });

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
      if (product[key as keyof ProductForm].toString().trim() === "") {
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
    await createProductAction(product);
    router.push("/products");
    setLoading(false);
  };

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <div className="p-[15px]">
          <h3 className="text-[25px] font-medium text-black dark:text-white">
            {t("addProduct")}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
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
              <div className="flex flex-col w-[50%] my-[10px]">
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

            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
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
              <div className="flex flex-col w-[50%] my-[10px]">
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
            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
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
              <div className="flex flex-col w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("thumbnail")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="text"
                  name="thumbnail"
                  value={product.thumbnail}
                  onChange={handleChange}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  required
                />
                {errors.thumbnail && (
                  <span className="text-red">{errors.thumbnail}</span>
                )}
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
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
              <div className="flex flex-col w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  {t("rating")}
                  <span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="rating"
                  value={product.rating}
                  onChange={handleChange}
                  min={0.1}
                  max={5}
                  step={0.1}
                  required
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                />
                {errors.rating && (
                  <span className="text-red">{errors.rating}</span>
                )}
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
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
              <div className="flex flex-col w-[50%] my-[10px]"></div>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`p-[7px] px-[25px] border border-solid border-red text-[18px] text-white bg-red hover:bg-lightred font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 w-[300px] ${
                isFormValid
                  ? "hover:bg-red hover:text-white"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              {loading ? <ThemeLoader /> : t("addProduct")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProductPage;
