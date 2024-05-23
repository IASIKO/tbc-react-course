"use client";

import { useEffect, useState } from "react";
import CheckoutCard from "./CheckoutCard";
import { selectedProduct } from "../../types/products-types";
import Button from "../UI/Button";
import { deleteProductAction, resetCartAction } from "../../lib/actions";
import Loader from "../UI/Loader";

const CheckoutTable = ({
  selectedProducts,
}: {
  selectedProducts: selectedProduct[];
}) => {
  const [cartProducts, setCartProducts] = useState<selectedProduct[] | []>([]);
  const [loading, setLoading] = useState(true);
  console.log("🚀 ~ cartProducts:", cartProducts);

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
        <p className="text-center dark:text-white">Cart is Empty</p>
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
