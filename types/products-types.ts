export interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    discount: number;
    rating: number;
    stock: number;
    brand: string;
    weight: number
    thumbnail: string;
    images: string[];
  }

  export interface ProductForm {
    title: string,
    category: string,
    description: string,
    price: number,
    discount: number,
    rating: number,
    stock: number,
    brand: string,
    weight: number,
    thumbnail: string,
  }

  export interface selectedProduct extends Product{
    quantity: number;
  }

  export interface ProductObject {
    id: number;
    quantity: number;
  }

  export interface CartTable {
    id: number,
    user_id: number,
    products: ProductObject[],
    added_on: string,
}
  