import ProductDetailsContent from "../../../../../components/Products/ProductDetailsContent";

interface ProductsDetailsProps {
  params: {
    id: number;
  };
}

interface Product {
  id: number;
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const products: { products: Product[] } = await res.json();
  const paths = products.products.map((product) => ({
    id: `/products/${product.id}`,
  }));
  return paths;
}

async function getProductById(productId: number) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  return res.json();
}

export default async function ProductsDetails({
  params: { id },
}: ProductsDetailsProps) {
  const product = await getProductById(id);

  return <ProductDetailsContent productDetails={product} />;
}
