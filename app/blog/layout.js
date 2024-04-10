import { Suspense } from "react";
import Loading from "../loading";
import TitleBgImage from "@/components/UI/TitleBgImage";

export default function BlogLayout({ children }) {
  return (
    <>
      <TitleBgImage>Blog</TitleBgImage>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
