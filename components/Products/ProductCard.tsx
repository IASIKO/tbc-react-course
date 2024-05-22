import React, { useState } from "react";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Product, ProductObject } from "../../types/products-types";
import { addProductAction } from "../../lib/actions";

interface ProductCardProps {
  product: Product;
  selectedProducts: ProductObject[];
}

const initialStatus = (id: number, products: ProductObject[]) => {
  const productExist = products?.find((p) => p.id === id);
  return productExist ? true : false;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  selectedProducts,
}) => {
  const [isInCart, setIsInCart] = useState(() =>
    initialStatus(product.id, selectedProducts)
  );
  const router = useRouter();
  const t = useTranslations("products");

  const onProductCardClickHandler = () => {
    router.push(`/products/${product.id}`);
  };

  const handleClick = () => {
    if (isInCart) return;

    addProductAction(product.id);
    setIsInCart(true);
  };

  return (
    <div className="flex flex-col justify-between items-center w-full bg-white dark:bg-gray hover:shadow-shadow-bottom rounded-lg transition-transform transform hover:scale-105">
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={onProductCardClickHandler}
      >
        <Image
          src={product?.thumbnail}
          alt={product.title}
          width={300}
          height={400}
          className="w-full h-[350px] object-cover rounded-t-lg"
        />
        <div className="text-center p-4 flex-1">
          <span className="italic text-[#b7472a] block mb-2">
            {product.category}
          </span>
          <h2 className="text-2xl capitalize font-light text-black leading-normal mb-2">
            {product.title}
          </h2>
          <p className="italic text-black text-xl">${product.price}</p>
        </div>
      </div>
      {isInCart ? (
        <div className="flex gap-2 mb-4">
          <button className="bg-red dark:bg-dark p-2 rounded-md select-none text-center font-bold uppercase text-white shadow-md transition-transform transform hover:scale-110  bg-gradient-to-tr from-gray-900 to-gray-800  align-middle   shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <FaMinus className="text-white" />
          </button>
          <button className="bg-red dark:bg-dark  p-2 rounded-md select-none text-center font-bold uppercase text-white shadow-md transition-transform transform hover:scale-110  bg-gradient-to-tr from-gray-900 to-gray-800  align-middle   shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <RiDeleteBin2Fill className="text-white" />
          </button>
          <button className="bg-red dark:bg-dark  p-2 rounded-md select-none text-center font-bold uppercase text-white shadow-md transition-transform transform hover:scale-110  bg-gradient-to-tr from-gray-900 to-gray-800  align-middle   shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <FaPlus className="text-white" />
          </button>
        </div>
      ) : (
        <div className="mb-4">
          <Button onClick={handleClick}>
            <HiOutlineShoppingBag />
            {t("addToCart")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
