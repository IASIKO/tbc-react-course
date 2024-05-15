import React from "react";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Product, selectedProduct } from "../../types/products-types";

interface ProductCardProps {
  product: Product;
  incrementHandler: (product: Product) => void;
  decrementHandler: (product: Product) => void;
  resetHandler: (product: Product) => void;
  selectedProducts: selectedProduct[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  incrementHandler,
  decrementHandler,
  resetHandler,
  selectedProducts,
}) => {
  const router = useRouter();
  const t = useTranslations("products");
  const isSelected = selectedProducts.some((p) => p.product?.id === product.id);

  const onProductCardClickHandler = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={onProductCardClickHandler}
      >
        <Image
          src={product?.thumbnail}
          alt={product.title}
          width={300}
          height={400}
          className="w-full h-80 object-cover"
        />
        <div className="text-center p-[20px] flex-1">
          <span className="italic text-[#b7472a]">{product.category}</span>
          <h2 className="text-[27px] capitalize font-light text-black leading-normal">
            {product.title}
          </h2>
          <p className="italic text-black">${product.price}</p>
        </div>
      </div>
      {isSelected ? (
        <div className="flex gap-2">
          <button
            onClick={() => decrementHandler(product)}
            className="bg-red p-2 rounded-md dark:bg-dark select-none bg-gradient-to-tr from-gray-900 to-gray-800 text-center align-middle font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <FaMinus className="text-white" />
          </button>
          <button
            onClick={() => resetHandler(product)}
            className="bg-red p-2 rounded-md dark:bg-dark select-none bg-gradient-to-tr from-gray-900 to-gray-800 text-center align-middle font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <RiDeleteBin2Fill className="text-white" />
          </button>
          <button
            onClick={() => incrementHandler(product)}
            className="bg-red p-2 rounded-md dark:bg-dark select-none bg-gradient-to-tr from-gray-900 to-gray-800 text-center align-middle font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <FaPlus className="text-white" />
          </button>
        </div>
      ) : (
        <div className="mb-2">
          <Button onClick={() => incrementHandler(product)}>
            {t("addToCart")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
