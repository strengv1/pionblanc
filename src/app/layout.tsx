import React from "react";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Header from "./Header";
import Footer from "./Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pionblanc.fi"),
  keywords: [
    "Tarjousgeneraattori pienyrityksille",
    "Tarjoustyökalu pienyrityksille",
    "Tarjonnan automaatiotyökalu",
    "Tarjousten automatisointi",
    "Tarjousten luontiohjelma",
    "Tarjoustyökalu",
    "Mukautettu tarjousohjelmisto",
    "Pienyrityksille suunnattu ohjelmistoratkaisu",
    "Automaattinen tilausvahvistusohjelma",
    "Tuotekatalogin hallinta",
    "Tuotetietojen integrointi",
    "Pienyritysohjelmistoratkaisut",
    "Kotisivut",
    "Nettisivut",
    "Ville Strengell",
    "Jan Härkönen",
    "Lauri Vaara"
  ],
  title: "Pion Blanc Oy | Tarjoustyökalu pienyrityksille",
  description: "Tutustu Pion Blancin tarjousgeneraattoriin – mukautettu ohjelmistoratkaisu, joka automatisoi tarjousten luomisen, integroi toimittajatiedot ja nopeuttaa tilausvahvistuksia pienyrityksille. Säästä aikaa ja kasvata liiketoimintaasi helposti käytettävällä alustallamme.",

  // openGraph: {
  //   description: "Pion Blanc Oy | Tarjousgeneraattori pienyrityksille",
  //   images: [""]
  // }
}

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
        <link rel="icon" href="favicon.png"></link>
        <link rel="preload" href="/videos/etsi_tuotteita.mp4" as="video" />
        <link rel="preload" href="/videos/luo_tarjous.mp4" as="video" />
        {/* <link rel="preload" href="/videos/ohjevideo3.mp4" as="video" /> */}
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <NextIntlClientProvider messages={messages}>
            <Header />

            {children}
          </NextIntlClientProvider>
        </main>

        <Footer />
      </body>
    </html>
  );
}
