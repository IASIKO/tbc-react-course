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
        <div className="w-22 h-28">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={90}
            height={110}
            className="max-w-full max-h-full object-cover"
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
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          onClick={() => {
            decrementHandler(product);
          }}
          className="bg-red p-2 rounded-md dark:bg-dark select-none bg-gradient-to-tr from-gray-900 to-gray-800 text-center align-middle  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <FaMinus className="text-white" />
        </button>
        <button
          onClick={() => resetHandler(product)}
          className="bg-red p-2 ml-2 rounded-md dark:bg-dark select-none bg-gradient-to-tr from-gray-900 to-gray-800 text-center align-middle  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <RiDeleteBin2Fill className="text-white" />
        </button>
        <button
          onClick={() => incrementHandler(product)}
          className="bg-red p-2 ml-2 rounded-md dark:bg-dark select-none bg-gradient-to-tr from-gray-900 to-gray-800 text-center align-middle  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <FaPlus className="text-white" />
        </button>
      </td>
    </tr>
  );
};

export default CheckoutCard;
