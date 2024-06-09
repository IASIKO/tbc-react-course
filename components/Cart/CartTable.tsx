"use client";

import { useEffect, useState } from "react";
import { selectedProduct } from "../../types/products-types";
import {
  checkoutAction,
  deleteProductAction,
  resetCartAction,
} from "../../lib/actions";
import Loader from "../UI/Loader";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useTranslations } from "next-intl";
import CartCard from "./CartCard";

const CartTable = ({
  selectedProducts,
}: {
  selectedProducts: selectedProduct[];
}) => {
  const [cartProducts, setCartProducts] = useState<selectedProduct[] | []>([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("cart");

  useEffect(() => {
    setCartProducts(selectedProducts);
    setLoading(false);
  }, []);

  const handleIncrement = (id: number) => {
    const updatedProduct = cartProducts.map((product: selectedProduct) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    setCartProducts(updatedProduct);
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
  };

  const handleDelete = (id: number) => {
    const updatedProduct = cartProducts.filter((product) => {
      return product.id !== id;
    });
    setCartProducts(updatedProduct);
    deleteProductAction(id);
  };

  const handleReset = () => {
    setCartProducts([]);
    resetCartAction();
  };

  const checkoutHandler = async () => {
    await checkoutAction(cartProducts);
  };

  const countSubtotal = cartProducts.reduce(
    (curr: number, acc: selectedProduct) => {
      return curr + acc.quantity * acc.price;
    },
    0
  );

  const subtotal = Math.round(countSubtotal * 100) / 100;

  return (
    <div className="py-4 m-auto w-full max-w-5xl animate-fade-in-up">
      {loading ? (
        <Loader />
      ) : !cartProducts?.length ? (
        <div>
          <span className="relative text-red text-[200px] flex justify-center">
            <HiOutlineShoppingBag />
            <div className="absolute -top-1 right-[410px] w-[80px] h-[80px] rounded-full bg-[#4e4d4dbf] opacity-90 flex items-center justify-center">
              <div className="text-white text-[50px]">0</div>
            </div>
          </span>
          <p className="text-center text-[40px] dark:text-white">
            {t("empty")}
          </p>
        </div>
      ) : (
        <div className="p-4 flex gap-8 flex-col lg:flex-row lg:items-start items-center">
          <div className="grid grid-cols-1 gap-6">
            {cartProducts?.map((product) => (
              <CartCard
                key={product.id}
                selectedProduct={product}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
              />
            ))}
            <button
              className="p-[7px] px-[25px] bg-red text-[18px] text-white font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-lightred"
              onClick={handleReset}
            >
              {t("clearCart")}
            </button>
          </div>
          <div>
            <div className="w-[300px] border border-red p-4">
              <div>
                <h3 className="text-[24px] mb-4 font-normal text-black dark:text-white">
                  {t("cartTotals")}
                </h3>
                <p className="flex justify-between">
                  <span className="text-[16px]">{t("subtotal")}</span>
                  <span className="text-[16px]">${subtotal}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[16px]"> {t("delivery")}</span>
                  <span className="text-[16px]">$0.00</span>
                </p>
                <p className="flex justify-between mb-4">
                  <span className="text-[16px]">{t("discount")}</span>
                  <span className="text-[16px]">$0.00</span>
                </p>
                <hr className="text-red" />
                <p className="flex justify-between p-4">
                  <span className="text-[16px]">{t("total2")}</span>
                  <span className="text-[16px] text-black font-bold dark:text-white">
                    ${subtotal - 0 - 0}
                  </span>
                </p>
              </div>
              <button
                onClick={checkoutHandler}
                className="p-[7px] bg-red text-[18px] text-white font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-lightred w-full"
              >
                {t("procTocCheckout")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTable;
