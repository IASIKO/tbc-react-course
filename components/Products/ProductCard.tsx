import React from "react";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProductInfo {
  id: number;
  thumbnail: string;
  title: string;
  category: string;
  price: number;
}

interface ProductCardProps {
  productInfo: ProductInfo;
}

const ProductCard: React.FC<ProductCardProps> = ({ productInfo }) => {
  const router = useRouter();
  const t = useTranslations("products");

  const onProductCardClickHandler = () => {
    router.push(`/products/${productInfo.id}`);
  };

  return (
    <div className="flex flex-col justify-center items-center p">
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={onProductCardClickHandler}
      >
        <Image
          src={productInfo?.thumbnail}
          alt={productInfo.title}
          width={300}
          height={400}
          className="w-full h-80 object-cover"
        />
        <div className="text-center p-[20px] flex-1">
          <span className="italic text-[#b7472a]">{productInfo.category}</span>
          <h2 className="text-[27px] capitalize font-light text-black leading-normal">
            {productInfo.title}
          </h2>
          <p className="italic text-black">${productInfo.price}</p>
        </div>
      </div>
      <div className="mb-[30px]">
        <Button>{t("addToCart")}</Button>
      </div>
    </div>
  );
};

export default ProductCard;
