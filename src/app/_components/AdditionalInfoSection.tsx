"use client"

import "../../styles/frontpage.css"
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";

const DynamicText = () => {
  const t = useTranslations('AdditionalInfoSection');

  const words = [  // eslint-disable-line react-hooks/exhaustive-deps
    t("rotating_word_1"),
    t("rotating_word_2"),
    t("rotating_word_3"),
    t("rotating_word_4"),
    t("rotating_word_5")
  ];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [fade, setFade] = useState(true);
  const textRef = useRef<HTMLSpanElement>(null);
  const [wordWidth, setWordWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (textRef.current) {
        setWordWidth(textRef.current.offsetWidth);
      }
    };

    updateWidth();

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setFade(true);
        updateWidth();
      }, 500);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [words]);

  return (
    <span className="relative inline-flex justify-center">
      {/* Must adjust xs depending on longest rotating word! */}
      <span
        ref={textRef}
        className={`h-12 xs:h-auto font-bold text-primary transition-all duration-500 ${fade ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {currentWord}
      </span>
      <span
        className="hidden xs:block absolute font-bold transition-transform duration-500"
        style={{
          transform: `translateX(${(wordWidth / 2) + 3}px)`,
        }}
      >
        .
      </span>
    </span>
  );
};

export default function AdditionalInfoSection() {
  const t = useTranslations('AdditionalInfoSection');

  return (
    <section className="
      additional-info-section w-full mt-20 mb-20 md:mt-40 lg:mt-60 flex flex-col gap-32 items-center
    ">
      <div className="flex text-white bg-secondary rounded-3xl text-center mx-4 md:mx-8">
        <div className="w-full flex flex-col gap-4 lg:gap-10 my-10 md:my-20 mx-4 md:mx-20 lg:mx-36">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {t("additionalTitle")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-screen-md mx-4 md:mx-auto text-balance flex flex-wrap justify-center">
            {t("additionalSubtext")}
            <span className="inline-block text-center">
              <DynamicText />
            </span>
          </p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row max-w-screen-xl text-left mx-4 md:mx-8">
        <div className="w-full flex flex-col gap-4 lg:gap-10 justify-center">
          <h1 className="text-lg lg:text-3xl font-semibold">
            {t("title")}
          </h1>
          <p className="text-md lg:text-2xl md:text-balance lg:-mb-4">
            {t("paragraph1")}
          </p>
          <p className="text-md lg:text-2xl md:text-balance">
            {t("paragraph2Start")} 
            <Link href="/catalogue" className="border-b-2 border-primary internal-link">{t("our_catalogue")}</Link>
            {t("paragraph2Middle")} 
            <Link href="/contact_us" className="border-b-2 border-primary internal-link">{t("few_clicks_away")}</Link>
            {t("paragraph2End")} 
          </p>
        </div>
        <div className="w-full relative h-[280px] md:h-[350px] lg:h-[400px] flex items-center justify-center text-center mt-4 lg:mt-0">
          <Image
            src="/tuotedataa.png"
            alt=""
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}