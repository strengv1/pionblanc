import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="
      w-full flex gap-4 py-6 px-4 md:px-6
      border-t bg-border text-muted-foreground justify-between lg:justify-around"
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs">
          © {new Date().getFullYear()} Pion Blanc Oy. {t("all_rights")}
        </p>
        <div className="flex flex-col text-xs ">
          <span>Jan Härkönen</span>
          <span>+358 50 46 46 745</span>
          <span>jan.harkonen@pionblanc.fi</span>
        </div>
        <div className="flex flex-col text-xs ">
          <span>Lauri Vaara</span>
          <span>+358 50 553 7079</span>
          <span>lauri.vaara@pionblanc.fi</span>
        </div>
        <div className="flex flex-col text-xs ">
          <span>Ville Strengell</span>
          <span>+358 50 494 5684</span>
          <span>ville.strengell@pionblanc.fi</span>
        </div>
      </div>
      
      

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* <Link className="text-xs hover:underline underline-offset-4" href="#">
          {t("terms_of_service")}
        </Link> */}
        <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
          {t("privacy")}
        </Link>
      </div>
    </footer>
  )
}