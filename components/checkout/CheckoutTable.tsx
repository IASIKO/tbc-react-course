"use client";

import { useEffect, useState } from "react";
import { useReducerHook } from "../../hooks/useReducerHook";
import CheckoutCard from "./CheckoutCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Product, selectedProduct } from "../../types/products-types";


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

  useEffect(() => {
    setCachedValue(selectedProducts);
  }, [selectedProducts, setCachedValue]);


  return (
    <div className="py-4 m-auto w-[600px] overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow dark:bg-dark">
        <thead className="bg-red dark:bg-dark">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
              ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-sm font-large text-black uppercase tracking-wider dark:text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray">
          {isClient && selectedProducts?.map((product: selectedProduct) => (
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
    </div>
  );
};

export default CheckoutTable;
