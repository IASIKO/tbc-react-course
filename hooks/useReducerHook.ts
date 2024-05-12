import { useReducer } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface selectedProduct {
  // id: number;
  product: Product;
  count: number;
}

const initialState: selectedProduct[] = [];

type Action =
  | { type: "INCREMENT"; payload: Product }
  | { type: "DECREMENT"; payload: Product }
  | { type: "RESET"; payload: Product }
  | { type: "CLEAR" };

const reducer = (state: selectedProduct[], action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      const selectedProductsIndex = state.findIndex(
        (p) => p.product?.id === action.payload.id
      );

      if (selectedProductsIndex === -1)
        return [...state, { product: action.payload, count: 1 }];

      const clone = [...state];
      const selectedProduct = clone[selectedProductsIndex];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count + 1,
      };
      clone[selectedProductsIndex] = updatedSelectedProduct;

      return clone;
    }

    case "DECREMENT": {
      const selectedProductsIndex = state.findIndex(
        (p) => p.product?.id === action.payload.id
      );

      if (selectedProductsIndex === -1)
        return [...state, { product: action.payload, count: 1 }];

      const clone = [...state];
      const selectedProduct = clone[selectedProductsIndex];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count - 1,
      };
      if (updatedSelectedProduct.count === 0) {
        clone.splice(selectedProductsIndex, 1);
      } else {
        clone[selectedProductsIndex] = updatedSelectedProduct;
      }

      return clone;
    }

    case "RESET": {
      const productId = action.payload.id;
      const selectedProductsIndex = state.findIndex(
        (p) => p.product?.id === productId
      );
      if (selectedProductsIndex !== -1) {
        const newState = [...state];
        newState.splice(selectedProductsIndex, 1);
        return newState;
      }
      return state;
    }

    case "CLEAR":
      return initialState;
  }
};

export const useReducerHook = (): [
  selectedProduct[],
  React.Dispatch<Action>
] => {
  const [selectedProducts, dispatch] = useReducer(reducer, [], () => {
    if (typeof window !== "undefined") {
      const storedValue = window.localStorage.getItem("selectedProducts");
      return storedValue ? JSON.parse(storedValue) : initialState;
    }
  });

  return [selectedProducts, dispatch];
};
