import { unstable_setRequestLocale } from "next-intl/server";
import ProductDetailsContent from "../../../../../components/Products/ProductDetails/ProductDetailsContent";
import { getProducts } from "../../../../../lib/api";
import { Product, selectedProduct } from "../../../../../types/products-types";
import {
  getAuthUserAction,
  getReviewsAction,
  getUserCartAction,
} from "../../../../../lib/actions";
import { getSession } from "@auth0/nextjs-auth0";
import { ResolvingMetadata } from "next";

interface ProductsDetailsProps {
  params: {
    id: number;
    locale: string;
  };
}

export async function generateMetadata(
  { params }: ProductsDetailsProps,
  parent: ResolvingMetadata
) {
  const productsData = await getProducts();
  const product = productsData.find(
    (product: Product) => product.id == params.id
  );

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product.title}`,
    description: `${product.description}`,
    openGraph: {
      images: [...previousImages, product.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  const paths = products.map((product: Product) => ({
    id: `/products/${product.id}`,
  }));
  return paths;
}

export default async function ProductsDetails({
  params: { id, locale },
}: ProductsDetailsProps) {
  unstable_setRequestLocale(locale);

  const session = await getSession();
  const sub = session?.user?.sub;

  const auth_user = await getAuthUserAction(sub);

  const reviews = await getReviewsAction(id);
  const productsData = await getProducts();
  const selectedProducts = await getUserCartAction();
  const selectedProduct = selectedProducts[0]?.products.find(
    (item: selectedProduct) => {
      return item.id == id;
    }
  );
  const product = productsData.find((product: Product) => product.id == id);

  return (
    <ProductDetailsContent
      productDetails={product}
      selectedProduct={selectedProduct}
      reviews={reviews.rows}
      authUser={auth_user?.auth_user.rows[0]}
    />
  );
}
