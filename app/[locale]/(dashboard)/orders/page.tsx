import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Liquor store - Success",
  description: "Succsess page",
};

export default async function Orders({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);


  return null
}
