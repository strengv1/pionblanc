import React from "react";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Header from "./Header";
import Footer from "./Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  // provide all messages to the client side
  // (may want to be done server-side later)
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preload" href="/videos/etsi_tuotteita.mp4" as="video" />
        <link rel="preload" href="/videos/ohjevideo2.mp4" as="video" />
        <link rel="preload" href="/videos/ohjevideo3.mp4" as="video" />
      </head>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />

          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
