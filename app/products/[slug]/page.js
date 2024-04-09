import ProductDetailsContent from "@/components/Products/ProductDetailsContent";
import TitleBgImage from "@/components/UI/TitleBgImage";

export default function ProductsDetails({ params }) {
  return (
    <>
      <TitleBgImage>Products Details</TitleBgImage>
      <ProductDetailsContent params={params} />
    </>
  );
}
