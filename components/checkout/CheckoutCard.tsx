import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Product, selectedProduct } from "../../types/products-types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  incrementHandler: (product: Product) => void;
  decrementHandler: (product: Product) => void;
  resetHandler: (product: Product) => void;
  selectedProduct: selectedProduct;
}

const CheckoutCard: React.FC<ProductCardProps> = ({
  product,
  incrementHandler,
  decrementHandler,
  resetHandler,
  selectedProduct,
}) => {
  return (
    <tr key={product.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="w-16 h-16">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={60}
            height={60}
            className="max-h-full max-w-full text-[16px] text-gray-900 dark:text-white object-cover"
          />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[20px] text-black font-medium leading-6 dark:text-white">
          {product.title}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[18px] text-gray-900 dark:text-white italic">
          ${product.price}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[20px] text-red font-semibold dark:text-white text-center">
          {selectedProduct.count}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[18px] text-gray-900 dark:text-white italic">
          $ {product.price * selectedProduct.count}
        </div>
      </td>
      <td className="flex items-center justify-start gap-4 px-6 py-4 whitespace-nowrap ">
        <button
          onClick={() => {
            decrementHandler(product);
          }}
          className="bg-red p-2 rounded-md dark:bg-dark"
        >
          <FaMinus className="text-white" />
        </button>
        <button
          onClick={() => resetHandler(product)}
          className="bg-red p-2 rounded-md dark:bg-dark"
        >
          <RiDeleteBin2Fill className="text-white" />
        </button>
        <button
          onClick={() => incrementHandler(product)}
          className="bg-red p-2 rounded-md dark:bg-dark"
        >
          <FaPlus className="text-white" />
        </button>
      </td>
    </tr>
  );
};

export default CheckoutCard;
