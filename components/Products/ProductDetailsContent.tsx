import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { PiCurrencyDollarBold } from "react-icons/pi";

interface ProductDetails {
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
  category: string;
  brand: string;
  description: string;
}

interface Dict {
  products: Record<string, string>;
}

interface ProductDetailsContentProps {
  productDetails: ProductDetails;
  dict: Dict;
}

const ProductDetailsContent: React.FC<ProductDetailsContentProps> = ({
  productDetails,
  dict,
}) => {
  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="w-[1140px] m-auto">
        <div className="flex">
          <Image
            src={productDetails.thumbnail}
            alt={productDetails.title}
            className="w-[500px] h-auto"
            width={500}
            height={500}
          />
          <div className="px-[60px]">
            <h2 className="text-black font-normal text-[35px]">
              {productDetails.title}
            </h2>
            <span className="text-red text-[20px] flex gap-2 items-center font-bold">
              {productDetails.rating}
              <MdStarRate />
            </span>
            <span className="text-black text-[35px] flex gap-2 items-center">
              {productDetails.price}
              <PiCurrencyDollarBold />
            </span>
            <span className="text-red italic font-bold">
              {dict.products.category}
            </span>
            <p className="dark:text-white">{productDetails.category}</p>
            <span className="text-red italic font-bold">
              {dict.products.brand}
            </span>
            <p className="dark:text-white">{productDetails.brand}</p>
            <span className="text-red italic font-bold">
              {dict.products.description}
            </span>
            <p className="dark:text-white">{productDetails.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsContent;
