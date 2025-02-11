import { useTranslations } from "next-intl";
import Link from "next/link";

export default function QuoteSection() {
  const t = useTranslations('QuoteSection');

  return (
    <section id="quote"
      className="quote-section w-full mx-auto px-4 py-28 md:py-24 lg:py-32 text-secondary md:mt-[200px] max-w-screen-xl"
    >
      <div className="flex gap-10 mx-5">
       <div className="w-full items-center justify-center text-center text-5xl md:text-8xl">
          5/5
        </div>
        <div className="flex flex-col gap-10">
          <Link href="https://daniel.fi/" target="_blank">
            <h1 className="text-lg lg:text-3xl font-semibold hover:underline underline-offset-4">
              Daniel&apos;s
            </h1>
          </Link>
          <p className="text-md lg:text-2xl">
            &quot;{t("from_daniels")}&quot;
          </p>
        </div>
        
      </div>
      
    </section>
  );
}