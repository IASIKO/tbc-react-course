import EditProductPage from "../../../../../../components/Products/EditProductPage";
import { getProducts } from "../../../../../../lib/api";
import { Product } from "../../../../../../types/products-types";

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
