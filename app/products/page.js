import ProductsList from "@/components/Products/ProductsList";
import TitleBgImage from "@/components/UI/TitleBgImage";
import React from "react";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function Products() {
  const productsListData = await getProducts();

  return (
    <>
      <TitleBgImage>Products</TitleBgImage>
      <ProductsList productListData={productsListData.products} />
    </>
  );
}
