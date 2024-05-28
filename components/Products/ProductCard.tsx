import React, { useState } from "react";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Product, ProductObject } from "../../types/products-types";
import { addProductAction } from "../../lib/actions";

interface ProductCardProps {
  product: Product;
  selectedProducts: ProductObject[];
  isOpen: () => void;
}

const initialStatus = (id: number, products: ProductObject[]) => {
  const productExist = products?.find((p) => p.id === id);
  return productExist ? true : false;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  selectedProducts,
  isOpen,
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
    <div className="p-4 flex flex-col justify-between items-center w-full bg-white dark:bg-gray hover:shadow-lg transition-transform transform hover:scale-105">
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={onProductCardClickHandler}
      >
        <Image
          src={product?.thumbnail}
          alt={product.title}
          width={200}
          height={250}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />
        <div className="text-center flex-1">
          <span className="italic text-[#b7472a] block">{product.brand}</span>
          <h2 className="text-2xl capitalize font-light text-black leading-normal">
            {product.title}
          </h2>
          <p className="italic text-black text-xl">${product.price}</p>
        </div>
      </div>
      {isInCart ? (
        <div className="mb-4">
          <button onClick={isOpen}>{t("inCart")}</button>
        </div>
      ) : (
        <div className="mb-4">
          <button
            onClick={handleClick}
            className="p-[7px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
          >
            <HiOutlineShoppingBag />
            {t("addToCart")}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
