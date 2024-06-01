"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { createProductAction } from "../../lib/actions";
import { ProductForm } from "../../types/products-types";
import { useRouter } from "next/navigation";

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
    weight: 0,
    thumbnail: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter()

  console.log("🚀 ~ AddProductPage ~ product:", product)
  
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
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    await createProductAction(product);
    router.push('/products')
  };

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <div className="p-[15px]">
          <h3 className="text-[25px] font-medium text-black dark:text-white">
            Add Product
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <div className="flex flex-col w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  Title<span className="text-red">*</span>
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
                  Category<span className="text-red">*</span>
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
                Description<span className="text-red">*</span>
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
                  Stock<span className="text-red">*</span>
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
                  Brand<span className="text-red">*</span>
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
                  Weight(mL)<span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="weight"
                  value={product.weight}
                  onChange={handleChange}
                  min={0}
                  className="border-[1px] border-solid border-red py-[5px] pl-[20px] dark:text-white"
                  required
                />
                {errors.weight && (
                  <span className="text-red">{errors.weight}</span>
                )}
              </div>
              <div className="flex flex-col w-[50%] my-[10px]">
                <h2 className="text-black font-normal dark:text-white">
                  Thumbnail<span className="text-red">*</span>
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
                  Discount<span className="text-red">*</span>
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
                  Rating<span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="rating"
                  value={product.rating}
                  onChange={handleChange}
                  min={0}
                  max={5}
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
                  Price<span className="text-red">*</span>
                </h2>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  min={0}
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
              className="p-[7px] px-[25px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-red hover:text-white"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProductPage;
