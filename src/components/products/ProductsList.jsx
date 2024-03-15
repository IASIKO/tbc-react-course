import React from "react";
import Search from "../Search";
import Product from "./Product";
import Button from "../UI/Button";

const productsData = [
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/prod-1.jpg.webp",
    category: "Brandy",
    name: "Bacardi 151",
    price: 49,
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/prod-2.jpg.webp",
    category: "Gin",
    name: "Jim Beam Kentucky Straight",
    price: 69,
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/prod-3.jpg.webp",
    category: "Rum",
    name: "Citadelle",
    price: 69,
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/prod-4.jpg.webp",
    category: "Rum",
    name: "The Glenlivet",
    price: 69,
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/prod-5.jpg.webp",
    category: "Whiskey",
    name: "Black Label",
    price: 69,
  },
  {
    image:
      "https://preview.colorlib.com/theme/liquorstore/images/prod-7.jpg.webp",
    category: "Vodka",
    name: "Old Monk",
    price: 69,
  },
];

const ProductsList = () => {
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
            <Search />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {productsData.map((product, index) => (
              <Product key={index} productInfo={product} />
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
