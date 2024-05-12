"use client";

import React, { useState, useEffect, useReducer } from "react";
import ProductCard from "./ProductCard";
import Search from "../Search";
import { useTranslations } from "next-intl";
import { useLocalStorage } from "../../hooks/useLocaleStorage";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsListProps {
  productListData: Product[];
}

interface selectedProduct {
  id: number;
  // product: Product;
  count: number;
}

const initialState: selectedProduct[] = [];

type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET"; payload: number }
  | { type: "CLEAR" };

const reducer = (state: selectedProduct[], action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      const selectedProductsIndex = state.findIndex(
        (p) => p.id === action.payload
      );

      if (selectedProductsIndex === -1)
        return [...state, { id: action.payload, count: 1 }];

      const clone = [...state];
      const selectedProduct = clone[selectedProductsIndex];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count + 1,
      };
      clone[selectedProductsIndex] = updatedSelectedProduct;

      return clone;
    }

    case "DECREMENT": {
      const selectedProductsIndex = state.findIndex(
        (p) => p.id === action.payload
      );

      if (selectedProductsIndex === -1)
        return [...state, { id: action.payload, count: 1 }];

      const clone = [...state];
      const selectedProduct = clone[selectedProductsIndex];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count - 1,
      };
      if (updatedSelectedProduct.count === 0) {
        clone.splice(selectedProductsIndex, 1);
      } else {
        clone[selectedProductsIndex] = updatedSelectedProduct;
      }

      return clone;
    }

    case "RESET": {
      const productId = action.payload;
      const selectedProductsIndex = state.findIndex((p) => p.id === productId);
      if (selectedProductsIndex !== -1) {
        const newState = [...state];
        newState.splice(selectedProductsIndex, 1);
        return newState;
      }
      return state;
    }

    case "CLEAR":
      return initialState;
  }
};

const ProductsList: React.FC<ProductsListProps> = ({ productListData }) => {
  const [productsListData, setProductsListData] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isProductsSorted, setIsProductsSorted] = useState(false);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const t = useTranslations("products");
  const [selectedProducts, dispatch] = useReducer(reducer, [], () => {
    if (typeof window !== "undefined") {
      const storedValue = window.localStorage.getItem("selectedProducts");
      return storedValue ? JSON.parse(storedValue) : initialState;
    }
  });
  const [, setCachedValue] = useLocalStorage("selectedProducts");

  useEffect(() => {
    setProductsListData(productListData);
  }, []);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      if (searchValue === "") {
        setFilteredProducts([...productsListData]);
      } else {
        const filterData = productsListData.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filterData);
      }
    }, 500);

    setTimeoutId(newTimeoutId);
  }, [searchValue, productsListData]);

  useEffect(() => {
    if (isProductsSorted) {
      const sortedData = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      setSortedProducts(sortedData);
    }
  }, [filteredProducts, isProductsSorted]);

  useEffect(() => {
    setCachedValue(selectedProducts);
  }, [selectedProducts, setCachedValue]);

  const onSearchInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };

  const onSortButtonClickHandler = () => {
    setIsProductsSorted(!isProductsSorted);
  };

  const incrementHandler = (product: Product) => {
    dispatch({ type: "INCREMENT", payload: product.id });
  };

  const decrementHandler = (product: Product) => {
    dispatch({ type: "DECREMENT", payload: product.id });
  };

  const resetHandler = (product: Product) => {
    dispatch({ type: "RESET", payload: product.id });
  };

  const productListToShow = isProductsSorted
    ? sortedProducts
    : filteredProducts;

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="max-w-[960px] mx-auto">
        <div className="pb-[30px] flex-col flex justify-center items-center">
          <span className="text-[#b7472a] text-[21px] font-normal italic">
            {t("listTitle1")}
          </span>
          <h2 className="text-[45px] font-bold text-black leading-normal">
            {t("listTitle2")}
          </h2>
          <Search
            onChange={onSearchInputChangeHandler}
            onClick={onSortButtonClickHandler}
            searchValue={searchValue}
            isProductsSorted={isProductsSorted}
          />
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {productListToShow.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              resetHandler={resetHandler}
              selectedProducts={selectedProducts}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
