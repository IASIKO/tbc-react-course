import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { selectedProduct } from "../../types/products-types";
import Image from "next/image";
import { updateCartCountAction } from "../../lib/actions";

interface ProductCardProps {
  selectedProduct: selectedProduct;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
}

const CheckoutCard: React.FC<ProductCardProps> = ({
  selectedProduct,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <tr key={selectedProduct.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <Image
          src={selectedProduct.thumbnail}
          alt={selectedProduct.title}
          width={90}
          height={110}
          className="w-full h-20 object-cover"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[20px] text-black font-medium leading-6 dark:text-white">
          {selectedProduct.title}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[18px] text-gray-900 dark:text-white italic">
          ${selectedProduct.price}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[20px] text-red font-semibold dark:text-white text-center">
          {selectedProduct.quantity}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[18px] text-gray-900 dark:text-white italic">
          $ {selectedProduct.price * selectedProduct.quantity}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          onClick={() => {
            handleDecrement(selectedProduct.id);
            updateCartCountAction(
              selectedProduct.id,
              selectedProduct.quantity - 1
            );
          }}
          className="bg-red dark:bg-dark ml-2 p-2 rounded-md select-none text-center font-bold uppercase text-white shadow-md transition-transform transform hover:scale-110  bg-gradient-to-tr from-gray-900 to-gray-800  align-middle   shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <FaMinus className="text-white" />
        </button>
        <button className="bg-red dark:bg-dark ml-2 p-2 rounded-md select-none text-center font-bold uppercase text-white shadow-md transition-transform transform hover:scale-110  bg-gradient-to-tr from-gray-900 to-gray-800  align-middle   shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <RiDeleteBin2Fill className="text-white" />
        </button>
        <button
          onClick={() => {
            handleIncrement(selectedProduct.id);
            updateCartCountAction(
              selectedProduct.id,
              selectedProduct.quantity + 1
            );
          }}
          className="bg-red dark:bg-dark ml-2 p-2 rounded-md select-none text-center font-bold uppercase text-white shadow-md transition-transform transform hover:scale-110  bg-gradient-to-tr from-gray-900 to-gray-800  align-middle   shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <FaPlus className="text-white" />
        </button>
      </td>
    </tr>
  );
};

export default CheckoutCard;
