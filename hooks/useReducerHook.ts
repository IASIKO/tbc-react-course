import { useReducer } from "react";

interface selectedProduct {
    id: number;
    // product: Product;
    count: number;
  }
  
  const initialState: selectedProduct[] = [];
  
  type Action =
    | { type: "INCREMENT"; payload: number }
    | { type: "DECREMENT"; payload: number }
    | { type: "RESET"; payload: number }
    | { type: "CLEAR" };
  
  const reducer = (state: selectedProduct[], action: Action) => {
    switch (action.type) {
      case "INCREMENT": {
        const selectedProductsIndex = state.findIndex(
          (p) => p.id === action.payload
        );
  
        if (selectedProductsIndex === -1)
          return [...state, { id: action.payload, count: 1 }];
  
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
          (p) => p.id === action.payload
        );
  
        if (selectedProductsIndex === -1)
          return [...state, { id: action.payload, count: 1 }];
  
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
        const productId = action.payload;
        const selectedProductsIndex = state.findIndex((p) => p.id === productId);
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

  export const useReducerHook = (): [selectedProduct[], React.Dispatch<Action>] => {
    const [selectedProducts, dispatch] = useReducer(reducer, [], () => {
        if (typeof window !== 'undefined') {
          const storedValue = window.localStorage.getItem('selectedProducts');
          return storedValue ? JSON.parse(storedValue) : initialState;
        }
      });

      return [selectedProducts,dispatch]
  }