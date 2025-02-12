"use client"

import "../../styles/frontpage.css"
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function FinalHookSection() {
  const t = useTranslations('FinalHookSection');

  return (
    <section className="
      additional-info-section w-full mt-20 md:mt-40 mb-20 lg:mt-60 flex flex-col gap-32 mx-auto items-center text-center
    ">
      <div className="flex py-10 md:py-20 md:px-32 rounded-3xl">
        <div className="w-full flex flex-col gap-4 lg:gap-10">
          <h1 className="text-lg lg:text-3xl font-semibold">
            {t("title")}
          </h1>
          <Link href="/contact_us" className="text-xl lg:text-2xl border-b-2 border-primary internal-link">
            {t("button")}
          </Link>
        </div>
      </div>

    </section>
  );
}