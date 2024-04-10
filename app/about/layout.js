import { Suspense } from "react";
import Loading from "../loading";
import TitleBgImage from "@/components/UI/TitleBgImage";

export default function AboutLayout({ children }) {
  return (
    <>
      <TitleBgImage>About</TitleBgImage>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
