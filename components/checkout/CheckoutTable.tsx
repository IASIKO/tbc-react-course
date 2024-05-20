"use client";

import { useEffect, useState } from "react";
import { useReducerHook } from "../../hooks/useReducerHook";
import CheckoutCard from "./CheckoutCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Product, selectedProduct } from "../../types/products-types";
import Button from "../UI/Button";

const CheckoutTable = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedProducts, dispatch] = useReducerHook();
  const [, setCachedValue] = useLocalStorage("selectedProducts");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const incrementHandler = (product: Product) => {
    dispatch({ type: "INCREMENT", payload: product });
  };

  const decrementHandler = (product: Product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };

  const resetHandler = (product: Product) => {
    dispatch({ type: "RESET", payload: product });
  };

  const clearHandler = () => {
    dispatch({ type: "CLEAR" });
  };

  useEffect(() => {
    setCachedValue(selectedProducts);
  }, [selectedProducts, setCachedValue]);

  return (
    <div className="py-4 m-auto w-[1000px] animate-fade-in-up">
      {!selectedProducts?.length && isClient ? (
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
              {isClient &&
                selectedProducts?.map((product: selectedProduct) => (
                  <CheckoutCard
                    key={product.product.id}
                    product={product.product}
                    incrementHandler={incrementHandler}
                    decrementHandler={decrementHandler}
                    resetHandler={resetHandler}
                    selectedProduct={product}
                  />
                ))}
            </tbody>
          </table>
          <div className="mt-2">
            <Button onClick={() => clearHandler()}>CLEAR CART</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutTable;
