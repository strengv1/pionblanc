
import "../../styles/frontpage.css"
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


const DynamicText = () => {
  const t = useTranslations('HomePage');

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
    <span className="relative inline-block min-w-[331px] lg:min-w-[397px] text-left"> {/* Adjust min-w to the longest word */}
      <span
        ref={textRef}
        className={`text-xl lg:text-2xl font-bold transition-all duration-500 ${fade ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {currentWord}
      </span>
      <span
        className="text-xl lg:text-2xl absolute left-0 font-bold transition-transform duration-500"
        style={{ transform: `translateX(${wordWidth}px)` }} // Adjust margin
      >
        .
      </span>
    </span>
  );
};


export default function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="hero-section
        w-full flex items-center justify-center text-center text-balance flex-col gap-10"
      style={{ height: "95svh", minHeight: "600px"}}
    >
      <div className="flex flex-col gap-5 z-10">
        <h1 className="font-bold tracking-tighter text-4xl lg:text-5xl xl:text-6xl mx-4">
          {t("hero_title")}
        </h1>
        <p className="text-lg lg:text-xl max-w-screen-md mx-4 md:mx-auto text-balance flex flex-wrap justify-center">
          {t("hero_desc")}
          <span className="inline-block min-w-[50%] text-center">
            <DynamicText />
          </span>
        </p>

      </div>
      <div className="space-x-10 z-10">
        <Link href="" target="_blank">
          <Button className="cta-button text-lg p-6 rounded-lg text-primary-foreground"> {/* hover:text-primary hover:bg-primary-foreground */}
            {t("call_to_action")} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        
        <Link href="/#demo">
          <Button variant="ghost"
            className="border-b-2 border-secondary rounded-b-none hover:bg-secondary hover:rounded-sm hover:text-primary-foreground"> {/*  */}
            {t("secondary_cta")}
          </Button>
        </Link>
        
      </div>
      {/* <div
        className="absolute bottom-10 left-0 w-full h-[200px] bg-primary transform -skew-y-3 origin-bottom"
      ></div> */}
    </section>
  );
}