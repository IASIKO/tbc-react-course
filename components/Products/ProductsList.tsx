"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Search from "../Search";
import { useTranslations } from "next-intl";
import {
  Product,
  ProductObject,
} from "../../types/products-types";
import { usePathname } from "next/navigation";

interface ProductsListProps {
  productListData: Product[];
  selectedProducts: ProductObject[];
}

const ProductsList: React.FC<ProductsListProps> = ({
  productListData,
  selectedProducts,
}) => {
  const [productsListData, setProductsListData] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isProductsSorted, setIsProductsSorted] = useState(false);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const t = useTranslations("products");
  const path = usePathname();

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

  const onSearchInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };

  const onSortButtonClickHandler = () => {
    setIsProductsSorted(!isProductsSorted);
  };

  const productListToShow = isProductsSorted
    ? sortedProducts
    : filteredProducts;

  const isClose = () => {
    document.body.style.overflow = "unset";
    setModalIsOpen(false);
  };

  const isOpen = () => {
    document.body.style.overflow = "hidden";
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen && (
        <div
          onClick={isClose}
          className="fixed top-0 left-0 w-full h-[100vh] z-30 bg-[#000000bf] opacity-90"
        ></div>
      )}
      {modalIsOpen && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-[60px] border border-red rounded-xl bg-white dark:bg-gray dark:border-black">
          <div className="flex items-center flex-col justify-center">
            <h2 className="text-red uppercase tracking-widest mb-6 dark:text-white">
              Warning!
            </h2>
            <p>Product is already in the cart</p>
          </div>
        </div>
      )}
      <section className="py-[60px] dark:bg-gray animate-fade-in-up">
        <div className="max-w-[1140px] mx-auto">
          <div className="pb-[30px] flex-col flex justify-center items-center">
            <span className="text-[#b7472a] text-[21px] font-normal italic">
              {t("listTitle1")}
            </span>
            <h2 className="text-[45px] font-bold text-black leading-normal">
              {t("listTitle2")}
            </h2>
            {path === "/products" && (
              <Search
                onChange={onSearchInputChangeHandler}
                onClick={onSortButtonClickHandler}
                searchValue={searchValue}
                isProductsSorted={isProductsSorted}
              />
            )}
          </div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {productListToShow.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                selectedProducts={selectedProducts}
                isOpen={isOpen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsList;
