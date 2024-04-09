"use client";

import { useEffect, useState } from "react";

const ProductDetailsContent = ({ params }) => {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    async function getProductDetails() {
      const response = await fetch(
        `https://dummyjson.com/products/${params.slug}`
      );
      const productDetails = await response.json();
      setProductDetails(productDetails);
    }

    getProductDetails();
  }, [params]);

  return <div>ProductDetailsContent: {productDetails.title}</div>;
};

export default ProductDetailsContent;
