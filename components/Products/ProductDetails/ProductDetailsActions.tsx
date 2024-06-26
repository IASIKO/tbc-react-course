"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaFacebook, FaMinus, FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Product, selectedProduct } from "../../../types/products-types";
import {
  addProductAction,
  deleteProductAction,
  updateCartCountAction,
} from "../../../lib/actions";
import { FacebookShareButton, TwitterShareButton } from "next-share";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

interface ProductDetailsActionsProps {
  productDetails: Product;
  selectedProduct: selectedProduct;
}

const initialStatus = (id: number, products: selectedProduct[]) => {
  const productExist = products?.find((p) => p?.id === id);
  return productExist ? true : false;
};

const ProductDetailsActions: React.FC<ProductDetailsActionsProps> = ({
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
  const path = usePathname();

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
          type="button"
          onClick={addToCartHandler}
          className="p-3 px-6 border border-solid border-red text-lg text-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-red hover:text-white w-[300px] m-auto sm:ml-0"
        >
          {t("addToCart")}
        </button>
      ) : (
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex gap-4 m-auto sm:ml-0">
            <button
              type="button"
              onClick={() => handleDecrement(productDetails.id)}
              className="p-3 border border-solid border-red text-lg text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
              disabled={cartProducts[0]?.quantity === undefined}
            >
              <FaMinus />
            </button>
            <span className="text-red font-extrabold">
              {cartProducts[0]?.quantity === undefined
                ? 1
                : cartProducts[0]?.quantity}
            </span>
            <button
              type="button"
              onClick={() => handleIncrement(productDetails.id)}
              className="p-3 border border-solid border-red text-lg text-red font-medium align-middle duration-300 uppercase flex items-center gap-2 hover:bg-red hover:text-white"
              disabled={cartProducts[0]?.quantity === undefined}
            >
              <FaPlus />
            </button>
          </div>
          <button
            type="button"
            onClick={() => handleDelete(productDetails.id)}
            className="px-3 py-2 border border-solid border-red text-lg text-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-red hover:text-white w-[300px] m-auto sm:ml-0"
            disabled={cartProducts[0]?.quantity === undefined}
          >
            {t("removeFromCart")}
          </button>
        </div>
      )}
      <div className="my-4 flex gap-2 items-center">
        <span className="text-black dark:text-white text-[20px] font-bold">
          SHARE
        </span>
        <FacebookShareButton
          url={`https://tbc-react-course-mu.vercel.app${path}`}
        >
          <FaFacebook className="text-red text-[30px]" />
        </FacebookShareButton>
        <TwitterShareButton
          url={`https://tbc-react-course-mu.vercel.app${path}`}
        >
          <FaXTwitter className="text-red text-[30px]" />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default ProductDetailsActions;
