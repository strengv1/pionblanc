import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="
      flex flex-col gap-2 py-6 px-4 sm:flex-row w-full 
      items-center md:px-6 border-t
      bg-border text-muted-foreground"
    >
      <p className="text-xs">
        © {new Date().getFullYear()} Pion Blanc Oy. {t("all_rights")}
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          {t("terms_of_service")}
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          {t("privacy")}
        </Link>
      </nav>
    </footer>
  )
}