import { unstable_setRequestLocale } from "next-intl/server";
import SuccessPage from "../../../../../components/Orders/Success";

export const metadata = {
  title: "Liquor store - Success",
  description: "Succsess page",
};

export default async function Success({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <SuccessPage />;
}
