import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "@/app/_components/LocaleSwitcher";

export default function Header() {
  const t = useTranslations('Header');

  const linkClassName = "text-sm font-medium hover:underline underline-offset-4"
  return (
    <header className="p-4 lg:px-6 h-20 flex fixed w-full items-center bg-secondary text-white shadow-lg opacity-95 z-50 top-0">
      <Link className="flex items-center justify-center" href="/">
        <img src="/Group24.svg" alt="Logo" className="h-10 w-40 md:h-10 md:w-48 lg:h-14 lg:w-64" />

      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center justify-center">
        <Link className={`${linkClassName}`} href="/#demo">
          {t("demo")}
        </Link>
        {/* <Link className={`${linkClassName}`} href="/#pricing">
          {t("prices")}
        </Link> */}
        <Link className={`${linkClassName}`} href="/catalogue">
          {t("catalogue")}
        </Link>
        <Link className={`${linkClassName}`} href="/contact_us">
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