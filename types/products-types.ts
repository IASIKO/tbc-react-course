export interface Product {
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
    weight: number
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
  