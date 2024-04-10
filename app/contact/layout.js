import { Suspense } from "react";
import Loading from "../loading";
import TitleBgImage from "@/components/UI/TitleBgImage";

export default function ContactLayout({ children }) {
  return (
    <>
      <TitleBgImage>Contact</TitleBgImage>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
