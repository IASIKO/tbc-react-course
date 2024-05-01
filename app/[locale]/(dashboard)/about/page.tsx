import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getDictionary } from "../../dictionaries";

export default async function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale);

  return <TitleBgImage>{dict.aboutPage.about}</TitleBgImage>;
}
