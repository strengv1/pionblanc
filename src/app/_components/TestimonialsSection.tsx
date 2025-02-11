import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image"

export default function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');

  return (
    <section id="testimonials"
      className="testimonials-section w-full mx-auto px-4 py-28 md:py-24 lg:py-32 text-secondary md:mt-[200px] max-w-screen-xl"
    >
      <div className="flex gap-10 mx-5">
        <div className="w-full md:flex text-center self-center justify-center gap-5">
          <span className="text-5xl md:text-8xl">
            5/5
          </span>
          <div className="flex self-center justify-center">
            <Star fill="secondary"/>
            <Star fill="secondary"/>
            <Star fill="secondary"/>
            <Star fill="secondary"/>
            <Star fill="secondary"/>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <Quote width="2rem" height="2rem"/>
          <p className="text-md lg:text-2xl italic">
            {t("from_daniels")}
          </p>

          <Image
            src="/logos/daniels_logo_testimonials.png"
            alt={`Daniel's logo`}
            width={150}
            height={200}
            className="object-contain w-32 md:w-40 lg:w-48 h-10 sm:h-28 md:h-32"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}