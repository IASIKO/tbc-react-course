import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LiaStarSolid } from "react-icons/lia";
import { Product, ProductObject } from "../../types/products-types";
import { addProductAction } from "../../lib/actions";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MdDelete, MdEdit } from "react-icons/md";

interface ProductCardProps {
  product: Product;
  selectedProducts: ProductObject[];
  isOpen: () => void;
  removeProductHandler: (id:number) => void;
}

const initialStatus = (id: number, products: ProductObject[]) => {
  const productExist = products?.find((p) => p.id === id);
  return productExist ? true : false;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  selectedProducts,
  isOpen,
  removeProductHandler
}) => {
  const [isInCart, setIsInCart] = useState(() =>
    initialStatus(product.id, selectedProducts)
  );
  const router = useRouter();
  const t = useTranslations("products");
  const { user } = useUser();

  const onProductCardClickHandler = () => {
    router.push(`/products/${product.id}`);
  };

  const addToCartHandler = () => {
    if (isInCart) return;

    if (!user) {
      router.push("/api/auth/login");
    } else {
      addProductAction(product.id);
      setIsInCart(true);
    }
  };

  return (
    <div className="p-4 flex flex-col justify-between items-center w-full bg-white dark:bg-gray hover:shadow-lg transition-transform transform hover:scale-105">
      <div className="w-full flex gap-2 p-2">
        <button
          className="text-black hover:text-red dark:text-white"
          onClick={() => removeProductHandler(product.id)}
        >
          <MdDelete />
        </button>
        <button className="text-black hover:text-red dark:text-white">
          <MdEdit />
        </button>
      </div>
      <div
        className="flex flex-col justify-center items-start cursor-pointer"
        onClick={onProductCardClickHandler}
      >
        <Image
          src={product?.thumbnail}
          alt={product.title}
          width={200}
          height={250}
          className="w-[200px] h-[250px] object-cover rounded-t-lg"
        />
        <div className="text-left w-full mt-2 flex flex-col justify-between h-[150px]">
          <span className="flex items-center text-sm">
            <LiaStarSolid className="text-yellow" />
            <LiaStarSolid className="text-yellow" />
            <LiaStarSolid className="text-yellow" />
            <LiaStarSolid className="text-yellow" />
            <LiaStarSolid className="text-yellow" />
            {product.rating}
          </span>
          <h2 className="text-[20px] capitalize font-bold text-black leading-normal line-clamp-2 dark:text-white">
            {product.title}
          </h2>
          <span className="text-sm">{product.weight}mL</span>
          <div className="w-full flex justify-between items-center mt-2 mb-2">
            <p className="text-red text-xl font-extrabold">${product.price}</p>
          </div>
        </div>
      </div>
      {isInCart ? (
        <div className="my-4">
          <button
            onClick={isOpen}
            className="p-[7px] px-6 border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
          >
            {t("inCart")}
          </button>
        </div>
      ) : (
        <div className="w-full my-4">
          <button
            onClick={addToCartHandler}
            className="p-[7px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-red hover:text-white w-full"
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
