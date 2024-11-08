import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 lg:px-6 h-14 flex fixed w-full items-center bg-slate-400 bg-opacity-95 z-10 top-0">
          <Link className="flex items-center justify-center" href="/">
            <img src="/pawn.svg" alt="Logo" className="h-7 w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 text-primary" />
            <span className="ml-2 text-lg md:text-xl lg:text-2xl font-bold">Pion Blanc</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#demo">
              Demo
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
              Hinnat
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#catalog">
              Katalogi
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Ota yhteyttä
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
              Tarinamme
            </Link>
          </nav>
        </header>
        <main className="flex-1 mt-16 mb-9">
          {children}
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2023 Pion Blanc Oy. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
