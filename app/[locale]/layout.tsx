import { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export const metadata = {
  title: "Liquor store",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return ['en', 'ka'].map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="dark:bg-gray">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
