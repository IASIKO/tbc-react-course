import { Product } from "../../types/products-types";

const CategoriesSection = ({
  productListData,
}: {
  productListData: Product[];
}) => {

  const categories: string[] = [];

  productListData.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  return <div></div>;
};

export default CategoriesSection;
