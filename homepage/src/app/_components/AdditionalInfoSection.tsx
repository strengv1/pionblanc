
import "../../styles/frontpage.css"
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AdditionalInfoSection() {
  const t = useTranslations('AdditionalInfoSection');

  return (
    <section className="
      additional-info-section w-full mt-20 md:mt-40 mb-20 lg:mt-60 flex flex-col gap-10 mx-auto max-w-screen-xl
    ">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 mx-14 md:mx-32 lg:mx-5">
        <div className="w-full flex flex-col gap-4 lg:gap-10 ">
          <h1 className="text-lg lg:text-3xl font-semibold">
            {t("title")}
          </h1>
          <p className="text-md lg:text-2xl text-balance ">
            {t("paragraphStart")} 
            <Link href="/catalogue" className="border-b-2 border-primary catalogue-link">{t("our_catalogue")}</Link>
            {t("paragraphMiddle")} 
            <Link href="/#contact_us" className="border-b-2 border-primary catalogue-link">{t("few_clicks_away")}</Link>
            {t("paragraphEnd")} 
          </p>
        </div>
        <div className="w-full items-center justify-center text-center">
          <img src="/kettu_front.webp" alt="kettu" className="h-[400px] mx-auto"></img>
        </div>
      </div>
    </section>
  );
}