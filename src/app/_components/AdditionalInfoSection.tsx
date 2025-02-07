
import "../../styles/frontpage.css"
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";

const DynamicText = () => {
  const t = useTranslations('AdditionalInfoSection');

  const words = [
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
    // Function to update the width of the word
    const updateWidth = () => {
      if (textRef.current) {
        setWordWidth(textRef.current.offsetWidth);
      }
    };

    updateWidth(); // Initial measurement

    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setFade(true); // Start fade in
        updateWidth(); // Update width when word changes
      }, 500); // Wait for the fade out to complete before changing the word
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [words]);

  return (
    <span className="relative inline-flex justify-center min-w-[331px] lg:min-w-[397px]">
      <span
        ref={textRef}
        className={`font-bold  text-primary transition-all duration-500 ${fade ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {currentWord}
      </span>
      <span
        className="absolute font-bold transition-transform duration-500"
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
      additional-info-section w-full mt-20 md:mt-40 mb-20 lg:mt-60 flex flex-col gap-32 mx-auto items-center text-center
    ">
      <div className="flex text-white bg-secondary py-10 md:py-20 px-32 rounded-3xl">
        <div className="w-full flex flex-col gap-4 lg:gap-10">
          <h1 className="text-lg lg:text-3xl font-semibold">
            {t("additionalTitle")}
          </h1>
          <p className="text-xl lg:text-2xl max-w-screen-md mx-4 md:mx-auto text-balance flex flex-wrap justify-center">
            {t("additionalSubtext")}
            <span className="inline-block min-w-[50%] text-center">
              <DynamicText />
            </span>
          </p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 mx-14 md:mx-32 lg:mx-5 max-w-screen-xl">
        <div className="w-full flex flex-col gap-4 lg:gap-10 justify-center">
          <h1 className="text-lg lg:text-3xl font-semibold">
            {t("title")}
          </h1>
          <p className="text-md lg:text-2xl text-balance ">
            {t("paragraphStart")} 
            <Link href="/catalogue" className="border-b-2 border-primary catalogue-link">{t("our_catalogue")}</Link>
            {t("paragraphMiddle")} 
            <Link href="/contact_us" className="border-b-2 border-primary catalogue-link">{t("few_clicks_away")}</Link>
            {t("paragraphEnd")} 
          </p>
        </div>
        <div className="w-full relative h-[280px] md:h-[350px] lg:h-[400px] flex items-center justify-center text-center">
          <Image
            src="/tuotedataa.png"
            alt="working_on_laptop_illustration"
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}