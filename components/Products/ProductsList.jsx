'use client'

import React, { useState, useEffect } from "react";
import { productsListData } from "@/data/ProductsListData";
import Button from "../UI/Button";
import ProductCard from "./ProductCard";
import Search from "../Search";

const ProductsList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isProductsSorted, setIsProductsSorted] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      if (searchValue === "") {
        setFilteredProducts([...productsListData]);
      } else {
        const filterData = productsListData.filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filterData);
      }
    }, 500);

    setTimeoutId(newTimeoutId);
  }, [searchValue]);

  useEffect(() => {
    if (isProductsSorted) {
      const sortedData = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      setSortedProducts(sortedData);
    }
  }, [filteredProducts, isProductsSorted]);

  const onSearchInputChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSortButtonClickHandler = () => {
    setIsProductsSorted(!isProductsSorted);
  };

  const productListToShow = isProductsSorted
    ? sortedProducts
    : filteredProducts;

  return (
    <>
      <section className="py-[60px]">
        <div className="max-w-[960px] mx-auto">
          <div className="pb-[30px] flex-col flex justify-center items-center">
            <span className="text-[#b7472a] text-[21px] font-normal italic">
              Our Delightful offerings
            </span>
            <h2 className="text-[45px] font-bold text-black leading-normal">
              Tastefully Yours
            </h2>
            <Search
              onChange={onSearchInputChangeHandler}
              onClick={onSortButtonClickHandler}
              searchValue={searchValue}
              isProductsSorted={isProductsSorted}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {productListToShow.map((product, index) => (
              <ProductCard key={index} productInfo={product} />
            ))}
          </div>
        </div>
        {productListToShow.length !== 0 && (
          <div className="flex justify-center my-[60px]">
            <Button>View All Products</Button>
          </div>
        )}
      </section>
    </>
  );
};

export default ProductsList;
