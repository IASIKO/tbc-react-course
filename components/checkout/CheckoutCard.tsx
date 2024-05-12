import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Product, selectedProduct } from "../../types/products-types";


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
        <div className="text-[16px] text-gray-900 dark:text-white">
          {product.id}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-[16px] text-gray-900 dark:text-white">
          {selectedProduct.count}
        </div>
      </td>
      <td className="flex items-center justify-end gap-4 px-6 py-4 whitespace-nowrap ">
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
