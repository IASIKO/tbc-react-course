import ProductsList from "../../../../components/Products/ProductsList";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function Products() {
  const productsListData = await getProducts();

  return <ProductsList productListData={productsListData.products} />;
}
