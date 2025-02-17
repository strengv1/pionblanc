"use client"

import "../../styles/frontpage.css"
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from 'next/link';

export default function FinalHookSection() {
  const t = useTranslations('FinalHookSection');

  return (
    <section className="
      additional-info-section w-full mt-20 md:mt-40 mb-28 lg:mt-40 flex flex-col gap-32 mx-auto items-center text-center
    ">
      <div className="flex py-10 md:py-20 md:px-32 rounded-3xl">
        <div className="w-full flex flex-col gap-4 lg:gap-10">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            {t("title")}
          </h1>
          <div className="relative">
            <Link href="/contact_us" className="text-xl lg:text-2xl border-b-2 border-primary internal-link">
              {t("button")}
            </Link>
            <Image 
              className="absolute -left-24 sm:-left-40 -bottom-24 md:-left-40 md:-bottom-24"
              style={{ transform: "rotate(-5deg)" }} 
              src="scribble_arrow.svg"
              alt=""

              width={150}
              height={150}
            />
          </div>
          
        </div>
      </div>

    </section>
  );
}