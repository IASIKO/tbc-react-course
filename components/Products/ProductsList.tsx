"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Search from "../Search";
import { useTranslations } from "next-intl";
import { Product, ProductObject } from "../../types/products-types";
import { usePathname } from "next/navigation";
import { removeProductAction } from "../../lib/actions";
import Button from "../UI/Button";
import Link from "next/link";
import { AuthUser } from "../../types/profile-types";
import { AnimatePresence } from "framer-motion";
import Sort from "../Sort";
import ProductIsInCartModal from "./ProductIsInCartModal";

interface ProductsListProps {
  productListData: Product[];
  selectedProducts: ProductObject[];
  authUser: AuthUser;
}

const ProductsList: React.FC<ProductsListProps> = ({
  productListData,
  selectedProducts,
  authUser,
}) => {
  const [productsListData, setProductsListData] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isProductsSorted, setIsProductsSorted] = useState(false);
  const [sortDirection, setSortDirection] = useState<
    "default" | "asc" | "desc"
  >("default");
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const t = useTranslations("products");
  const path = usePathname();

  useEffect(() => {
    setProductsListData(productListData);
    setFilteredProducts(productListData);
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
    if (sortDirection === "default") {
      setSortedProducts(filteredProducts);
    } else {
      const sortedData = [...filteredProducts].sort((a, b) => {
        if (sortDirection === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setSortedProducts(sortedData);
    }
  }, [filteredProducts, sortDirection]);

  const onSearchInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };

  const sortChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const direction = e.target.value as "default" | "asc" | "desc";
    setSortDirection(direction);
    setIsProductsSorted(direction !== "default");
  };

  const isClose = () => {
    document.body.style.overflow = "unset";
    setModalIsOpen(false);
  };

  const isOpen = () => {
    document.body.style.overflow = "hidden";
    setModalIsOpen(true);
  };

  const removeProductHandler = (id: number) => {
    const filterData = productsListData.filter((product) => product.id !== id);
    setProductsListData(filterData);
    removeProductAction(id);
  };

  const productListToShow = isProductsSorted
    ? sortedProducts
    : filteredProducts;

  return (
    <>
      <AnimatePresence>
        {modalIsOpen && (
          <ProductIsInCartModal isClose={isClose}/>
        )}
      </AnimatePresence>
      {authUser?.role && authUser.role === "admin" && (
        <Link
          href="/products/add-product"
          className="fixed top-80 left-0 transform -translate-x-[50%] hover:-translate-x-[45%] rotate-90 z-50 duration-300"
        >
          <Button>{t('addProduct')}</Button>
        </Link>
      )}
      <section className="py-[60px] dark:bg-gray animate-fade-in-up">
        <div className="max-w-[1140px] mx-auto">
          <div className="pb-[30px] flex-col flex justify-center items-center">
            <span className="text-[#b7472a] text-[21px] font-normal italic text-center">
              {t("listTitle1")}
            </span>
            <h2 className="text-[45px] font-bold text-black leading-normal dark:text-white text-center">
              {t("listTitle2")}
            </h2>
            {path === "/products" && (
              <div className="pt-[60px] max-w-[1140px] flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
                <Search
                  onChange={onSearchInputChangeHandler}
                  searchValue={searchValue}
                />
                <Sort sortChangeHandler={sortChangeHandler} />
              </div>
            )}
          </div>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
            {productListToShow.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                selectedProducts={selectedProducts}
                isOpen={isOpen}
                removeProductHandler={removeProductHandler}
                authUser={authUser}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsList;
