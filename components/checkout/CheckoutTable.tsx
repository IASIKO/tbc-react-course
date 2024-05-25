"use client";

import { useEffect, useState } from "react";
import CheckoutCard from "./CheckoutCard";
import { selectedProduct } from "../../types/products-types";
import Button from "../UI/Button";
import { deleteProductAction, resetCartAction } from "../../lib/actions";
import Loader from "../UI/Loader";
import { HiOutlineShoppingBag } from "react-icons/hi";

const CheckoutTable = ({
  selectedProducts,
}: {
  selectedProducts: selectedProduct[];
}) => {
  const [cartProducts, setCartProducts] = useState<selectedProduct[] | []>([]);
  const [loading, setLoading] = useState(true);

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

    console.log("cart product id",cartProducts[cartProductIndex]);
    

    if (cartProducts[cartProductIndex].quantity === 1) {
      const updatedProduct = cartProducts.filter((product) => {
        return product.id !== id;
      });
      setCartProducts(updatedProduct);
      deleteProductAction(id);
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

  return (
    <div className="py-4 m-auto w-[1000px] animate-fade-in-up">
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
            Cart Is Empty
          </p>
        </div>
      ) : (
        <>
          <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow dark:bg-dark">
            <thead className="bg-red dark:bg-dark">
              <tr>
                <th className="px-6 py-6 text-left text-[22px] font-normal text-white tracking-wider dark:text-white"></th>
                <th className="px-6 py-6 text-left text-[22px] font-normal text-white tracking-wider dark:text-white">
                  Product
                </th>
                <th className="px-6 py-6 text-left text-[22px] font-normal text-white tracking-wider dark:text-white">
                  Price
                </th>
                <th className="px-6 py-6 text-left text-[22px] font-normal text-white tracking-wider dark:text-white">
                  Quantity
                </th>
                <th className="px-6 py-6 text-left text-[22px] font-normal text-white tracking-wider dark:text-white">
                  Total
                </th>
                <th className="px-6 py-6 text-left text-[22px] font-normal text-white tracking-wider dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray">
              {cartProducts?.map((product) => (
                <CheckoutCard
                  key={product.id}
                  selectedProduct={product}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
          <div className="mt-2">
            <Button onClick={handleReset}>CLEAR CART</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutTable;
