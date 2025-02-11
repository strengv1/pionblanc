
import "../../styles/frontpage.css"
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";

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
        <p className="text-xl lg:text-2xl max-w-screen-md mx-4 md:mx-auto text-balance flex flex-wrap justify-center">
          {t("hero_desc")}
        </p>

      </div>
      <div className="space-x-10 z-10">
        <Link href="/contact_us">
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