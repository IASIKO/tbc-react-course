"use client";

import Image from "next/image";
import { PiCurrencyDollarBold } from "react-icons/pi";
import TitleBgImage from "../UI/TitleBgImage";
import { useTranslations } from "next-intl";
import RateStars from "../RateStars";
import { Product, selectedProduct } from "../../types/products-types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import {
  addProductAction,
  deleteProductAction,
  updateCartCountAction,
} from "../../lib/actions";
import { useEffect, useState } from "react";

interface ProductDetailsContentProps {
  productDetails: Product;
  selectedProduct: selectedProduct;
}

const initialStatus = (id: number, products: selectedProduct[]) => {
  const productExist = products?.find((p) => p?.id === id);
  return productExist ? true : false;
};

const ProductDetailsContent: React.FC<ProductDetailsContentProps> = ({
  productDetails,
  selectedProduct,
}) => {
  const [cartProducts, setCartProducts] = useState<selectedProduct[] | []>([]);
  const [isInCart, setIsInCart] = useState(() =>
    initialStatus(productDetails.id, [selectedProduct])
  );
  const t = useTranslations("products");
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    setCartProducts([selectedProduct]);
  }, [selectedProduct]);

  console.log(cartProducts);

  const addToCartHandler = () => {
    if (!user) {
      router.push("/api/auth/login");
    } else {
      addProductAction(productDetails.id);
      setIsInCart(true);
    }
  };

  const handleDelete = (id: number) => {
    const updatedProduct = cartProducts.filter((product) => {
      return product.id !== id;
    });
    setCartProducts(updatedProduct);
    deleteProductAction(id);
    setIsInCart(false);
  };

  const handleIncrement = (id: number) => {
    const updatedProduct = cartProducts.map((product: selectedProduct) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    setCartProducts(updatedProduct);
    updateCartCountAction(cartProducts[0].id, cartProducts[0].quantity + 1);
  };

  const handleDecrement = (id: number) => {
    const cartProductIndex = cartProducts.findIndex(
      (product) => product.id === id
    );

    if (cartProducts[cartProductIndex].quantity === 1) {
      const updatedProduct = cartProducts.filter((product) => {
        return product.id !== id;
      });
      setCartProducts(updatedProduct);
    } else {
      const updatedProduct = cartProducts.map((product: selectedProduct) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });

      setCartProducts(updatedProduct);
    }
    if (cartProducts[0].quantity === 1) {
      handleDelete(cartProducts[0].id);
    } else {
      updateCartCountAction(cartProducts[0].id, cartProducts[0].quantity - 1);
    }
  };

  return (
    <>
      <TitleBgImage>{t("singlePageTitle")}</TitleBgImage>
      <section className="py-[60px] dark:bg-gray">
        <div className="w-[1140px] m-auto">
          <div className="flex">
            <Image
              src={productDetails.thumbnail}
              alt={productDetails.title}
              className="w-[500px] h-auto"
              width={500}
              height={700}
            />
            <div className="px-[60px]">
              <h2 className="text-black font-normal text-[32px] dark:text-white">
                {productDetails.title}
              </h2>
              <span className="text-red text-[18px] flex gap-2 items-center font-bold">
                {productDetails.rating}
              </span>
              <RateStars
                defaultRating={Math.round(productDetails.rating * 2) / 2}
              />
              <span className="text-black text-[32px] flex gap-2 items-center dark:text-white">
                {productDetails.price}
                <PiCurrencyDollarBold />
              </span>
              <span className="text-red italic font-bold">{t("category")}</span>
              <p className="dark:text-white">{productDetails.category}</p>
              <span className="text-red italic font-bold">{t("brand")}</span>
              <p className="dark:text-white">{productDetails.brand}</p>
              <span className="text-red italic font-bold">
                {t("description")}
              </span>
              <p className="dark:text-white">{productDetails.description}</p>
              <div className="mt-2">
                {!isInCart ? (
                  <button
                    onClick={addToCartHandler}
                    className="p-[7px] px-6 border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
                  >
                    Add To Cart
                  </button>
                ) : (
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleDecrement(productDetails.id)}
                        className="p-[12px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
                        disabled={
                          cartProducts[0]?.quantity === undefined ? true : false
                        }
                      >
                        <FaMinus />
                      </button>
                      <span className="text-red font-extrabold">
                        {cartProducts[0]?.quantity === undefined
                          ? 1
                          : cartProducts[0]?.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrement(productDetails.id)}
                        className="p-[12px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
                        disabled={
                          cartProducts[0]?.quantity === undefined ? true : false
                        }
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <div>
                    <button
                        onClick={() => handleDelete(productDetails.id)}
                        className="px-[12px] py-[6px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
                        disabled={
                          cartProducts[0]?.quantity === undefined ? true : false
                        }
                      >
                        remove from cart
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsContent;
