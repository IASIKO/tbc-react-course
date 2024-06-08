import { unstable_setRequestLocale } from "next-intl/server";
import CancelPage from "../../../../../components/Orders/CancelPage";

export const metadata = {
  title: "Liquor store - Cancel",
  description: "Cancel page",
};

export default async function Cancel({
    params: { locale },
  }: {
    params: { locale: string };
  }) {
  unstable_setRequestLocale(locale);

  return <CancelPage />;
}
