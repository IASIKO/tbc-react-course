import React from "react";
import Button from "../UI/Button";

const ProductCard = ({ productInfo }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={productInfo.image}
        alt={productInfo.name}
        className="w-[260px] h-400px]"
      />
      <div className="text-center p-[20px]q flex-1">
        <span className="italic text-[#b7472a]">{productInfo.category}</span>
        <h2 className="text-[27px] capitalize font-light text-black leading-normal">
          {productInfo.name}
        </h2>
        <p className="italic text-black">${productInfo.price}</p>
      </div>
      <div className="mb-[30px]">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
