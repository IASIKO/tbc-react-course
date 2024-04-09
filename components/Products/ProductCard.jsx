import React from "react";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";

const ProductCard = ({ productInfo }) => {
  const router = useRouter();
  const onProductCardClickHandler = () => {
    router.push(`/products/${productInfo.id}`);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={onProductCardClickHandler}
      >
        <img
          src={productInfo.thumbnail}
          alt={productInfo.title}
          className="w-[260px] h-400px]"
        />
        <div className="text-center p-[20px]q flex-1">
          <span className="italic text-[#b7472a]">{productInfo.category}</span>
          <h2 className="text-[27px] capitalize font-light text-black leading-normal">
            {productInfo.title}
          </h2>
          <p className="italic text-black">${productInfo.price}</p>
        </div>
      </div>
      <div className="mb-[30px]">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
