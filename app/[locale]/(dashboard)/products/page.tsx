import ProductsList from "../../../../components/Products/ProductsList";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getDictionary } from "../../dictionaries";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

export default async function Products({params: { locale }}) {
  const productsListData = await getProducts();
  const dict = await getDictionary(locale);


  return (
    <>
      <TitleBgImage>{dict.products.pageTitle}</TitleBgImage>
      <ProductsList productListData={productsListData.products} dict={dict}/>
    </>
  );
}
