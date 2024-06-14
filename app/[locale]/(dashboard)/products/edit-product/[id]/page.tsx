import EditProductPage from "../../../../../../components/Products/EditProduct/EditProductPage";
import { getProducts } from "../../../../../../lib/api";
import { Product } from "../../../../../../types/products-types";

export const metadata = {
  title: "Liquor store - Edit Product",
  description: "Edit Product page",
};

interface EditProductProps {
  params: {
    id: number;
  };
}

export default async function EditProduct({
    params: { id },
  }: EditProductProps) {

    const productsData = await getProducts();

  const product = productsData.find((product: Product) => product.id == id);

  return (
    <>
      <EditProductPage productInfo={product}/>
    </>
  );
}
