import { MdStarRate } from "react-icons/md";
import { PiCurrencyDollarBold } from "react-icons/pi";

const ProductDetailsContent = ({ productDetails }) => {
  return (
    <section className="py-[60px]">
      <div className="w-[1140px] m-auto">
        <div className="flex">
          <img
            src={productDetails.thumbnail}
            alt={productDetails.title}
            className="w-[500px] h-[600px]"
          />
          <div className="px-[60px]">
            <h2 className="text-black font-normal text-[35px]">
              {productDetails.title}
            </h2>
            <span className="text-red text-[20px] flex gap-2 items-center">
              {productDetails.rating}
              <MdStarRate />
            </span>
            <span className="text-black text-[35px] flex gap-2 items-center">
              {productDetails.price}
              <PiCurrencyDollarBold />
            </span>
            <span className="text-red italic">Category</span>
            <p>{productDetails.category}</p>
            <span className="text-red italic">Brand</span>
            <p>{productDetails.brand}</p>
            <span className="text-red italic">Description</span>
            <p>{productDetails.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsContent;
