import { unstable_setRequestLocale } from "next-intl/server";
import ExperienceSection from "../../../../components/About/ExperienceSection";

export const metadata = {
  title: "Liquor store - About",
  description: "About page",
};

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <ExperienceSection />
    </>
  );
}
