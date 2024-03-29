import React, { useState } from "react";
import Search from "../Search";
import ProductCard from "./ProductCard";
import Button from "../UI/Button";
import { productsListData } from "../../data/ProductsListData";

const ProductsList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([
    ...productsListData,
  ]);
  const [isProductsSorted, setIsProductsSorted] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const onSearchInputChangeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      const filterData = productsListData.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      setFilteredProducts(filterData);
    }, 500);

    setTimeoutId(newTimeoutId);
  };

  const onSortButtonClickHandler = () => {
    setIsProductsSorted(!isProductsSorted);
    if (isProductsSorted === false) {
      const sortedData = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      setFilteredProducts(sortedData);
    } else {
      setFilteredProducts([...productsListData]);
      setSearchValue("");
    }
  };

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
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} productInfo={product} />
            ))}
          </div>
        </div>
        {filteredProducts.length !== 0 && (
          <div className="flex justify-center my-[60px]">
            <Button>View All Products</Button>
          </div>
        )}
      </section>
    </>
  );
};

export default ProductsList;
