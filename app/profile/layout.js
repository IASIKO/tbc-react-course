import { Suspense } from "react";
import Loading from "../loading";
import TitleBgImage from "@/components/UI/TitleBgImage";

export default function ProfileLayout({ children }) {
  return (
    <>
      <TitleBgImage>Profile</TitleBgImage>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
