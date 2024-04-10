import { Suspense } from "react";
import Loading from "../loading";
import TitleBgImage from "@/components/UI/TitleBgImage";

export default function ProtuctsLayout({ children }) {
  return (
    <>
      <TitleBgImage>Products</TitleBgImage>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
