import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { selectedProduct } from "../../types/products-types";
import Image from "next/image";
import { updateCartCountAction } from "../../lib/actions";
import { motion } from "framer-motion";

interface ProductCardProps {
  selectedProduct: selectedProduct;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  handleDelete: (id: number) => void;
}

const CartCard: React.FC<ProductCardProps> = ({
  selectedProduct,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  return (
    <motion.div
      className="max-w-full lg:w-[1000px] h-auto flex items-center bg-white dark:bg-gray p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={selectedProduct.thumbnail}
        alt={selectedProduct.title}
        width={110}
        height={110}
        className="w-24 h-24 rounded-md"
      />
      <div className="ml-4 flex flex-grow gap-2 h-full flex-col justify-between">
        <div className="text-[20px] text-black font-medium leading-6 dark:text-white">
          {selectedProduct.title}
        </div>
        <div className="text-[18px] text-gray-900 dark:text-white italic">
          ${selectedProduct.price}
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => {
              handleDecrement(selectedProduct.id);
              if (selectedProduct.quantity === 1) {
                handleDelete(selectedProduct.id);
              } else {
                updateCartCountAction(
                  selectedProduct.id,
                  selectedProduct.quantity - 1
                );
              }
            }}
            className="bg-red p-2 rounded-md text-white hover:bg-darkred"
          >
            <FaMinus />
          </button>
          <div className="text-[20px] text-red font-semibold dark:text-white text-center">
            {selectedProduct.quantity}
          </div>
          <button
            type="button"
            onClick={() => {
              handleIncrement(selectedProduct.id);
              updateCartCountAction(
                selectedProduct.id,
                selectedProduct.quantity + 1
              );
            }}
            className="bg-red p-2 rounded-md text-white hover:bg-darkred"
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="text-gray-900 dark:text-white italic h-full flex flex-col justify-between items-end">
        <span>
          $
          {Math.round(selectedProduct.price * selectedProduct.quantity * 100) /
            100}
        </span>
        <button
          type="button"
          onClick={() => handleDelete(selectedProduct.id)}
          className="bg-red p-2 rounded-md text-white hover:bg-darkred w-[37px]"
        >
          <RiDeleteBin2Fill />
        </button>
      </div>
    </motion.div>
  );
};

export default CartCard;
