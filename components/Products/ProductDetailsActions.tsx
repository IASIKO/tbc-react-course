"use client";

import { useEffect, useState } from "react";
import { Product, selectedProduct } from "../../types/products-types";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  addProductAction,
  deleteProductAction,
  updateCartCountAction,
} from "../../lib/actions";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface ProductDetailsActions {
  productDetails: Product;
  selectedProduct: selectedProduct;
}

const initialStatus = (id: number, products: selectedProduct[]) => {
  const productExist = products?.find((p) => p?.id === id);
  return productExist ? true : false;
};

const ProductDetailsActions: React.FC<ProductDetailsActions> = ({
  selectedProduct,
  productDetails,
}) => {
  const [cartProducts, setCartProducts] = useState<selectedProduct[] | []>([]);
  const [isInCart, setIsInCart] = useState(() =>
    initialStatus(productDetails.id, [selectedProduct])
  );
  const router = useRouter();
  const { user } = useUser();
  const t = useTranslations("products");

  useEffect(() => {
    setCartProducts([selectedProduct]);
  }, [selectedProduct]);

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
    <div className="my-2">
      {!isInCart ? (
        <button
          onClick={addToCartHandler}
          className="p-[7px] px-6 border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
        >
          {t("addToCart")}
        </button>
      ) : (
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => handleDecrement(productDetails.id)}
              className="p-[12px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
              disabled={cartProducts[0]?.quantity === undefined ? true : false}
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
              disabled={cartProducts[0]?.quantity === undefined ? true : false}
            >
              <FaPlus />
            </button>
          </div>
          <div>
            <button
              onClick={() => handleDelete(productDetails.id)}
              className="px-[12px] py-[6px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
              disabled={cartProducts[0]?.quantity === undefined ? true : false}
            >
              {t("removeFromCart")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsActions;