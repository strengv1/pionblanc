import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="p-4 lg:px-6 h-14 flex fixed w-full items-center bg-slate-400 bg-opacity-95 z-10 top-0">
      <Link className="flex items-center justify-center" href="/">
        <img src="/pawn.svg" alt="Logo" className="h-7 w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 text-primary" />
        <span className="ml-2 text-lg md:text-xl lg:text-2xl font-bold">Pion Blanc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#demo">
          {t("demo")}
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#pricing">
          {t("prices")}
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#catalog">
          {t("catalog")}
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact">
          {t("contact")}
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
          {t("our_story")}
        </Link>
      </nav>
      <div className="mx-4">
        <LocaleSwitcher />
      </div>
    </header>
  )
}