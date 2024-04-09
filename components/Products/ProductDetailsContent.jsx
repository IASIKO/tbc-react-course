'use client'

import { useEffect, useState } from "react";

const ProductDetailsContent = ({ params }) => {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.slug}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res));
  }, [params]);

  return <div>ProductDetailsContent: {productDetails.title}</div>;
};

export default ProductDetailsContent;
