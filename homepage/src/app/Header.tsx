import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "@/app/_components/LocaleSwitcher";

export default function Header() {
  const t = useTranslations('Header');

  const linkClassName = "text-sm font-medium hover:underline underline-offset-4"
  return (
    <header className="p-4 lg:px-6 h-14 flex fixed w-full items-center bg-secondary text-white shadow-lg opacity-95 z-50 top-0">
      <Link className="flex items-center justify-center" href="/">
        <img src="/pawn.svg" alt="Logo" className="h-7 w-7 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        <span className="ml-2 text-lg md:text-xl lg:text-2xl font-bold">Pion Blanc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className={`${linkClassName}`} href="/#demo">
          {t("demo")}
        </Link>
        <Link className={`${linkClassName}`} href="/#pricing">
          {t("prices")}
        </Link>
        <Link className={`${linkClassName}`} href="/#catalog">
          {t("catalog")}
        </Link>
        <Link className={`${linkClassName}`} href="/#contact">
          {t("contact")}
        </Link>
        <Link className={`${linkClassName}`} href="/about">
          {t("our_story")}
        </Link>
      </nav>
      <div className="mx-4">
        <LocaleSwitcher />
      </div>
    </header>
  )
}