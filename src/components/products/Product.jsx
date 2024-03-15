import React from "react";

const Product = ({ productInfo }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={productInfo.image}
        alt={productInfo.name}
        className="w-[260px] h-400px]"
      />
      <div className="text-center p-[20px]q">
        <span className="italic text-[#b7472a]">{productInfo.category}</span>
        <h2 className="text-[27px] capitalize font-light text-black leading-normal">
          {productInfo.name}
        </h2>
        <p className="italic text-black">${productInfo.price}</p>
      </div>
    </div>
  );
};

export default Product;
