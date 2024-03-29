import React, { useState } from "react";
import Search from "../Search";
import ProductCard from "./ProductCard";
import Button from "../UI/Button";
import { productsListData } from "../../data/ProductsListData";

const ProductsList = () => {
  const [searchValue, setSearchValuetate] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([
    ...productsListData,
  ]);

  const onSearchInputChangeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValuetate(value);
    const filterData = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts([...filterData]);
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
              searchValue={searchValue}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} productInfo={product} />
            ))}
          </div>
        </div>
        <div className="flex justify-center my-[60px]">
          <Button>View All Products</Button>
        </div>
      </section>
    </>
  );
};

export default ProductsList;
