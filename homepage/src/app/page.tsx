"use client"

import "../styles/frontpage.css"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import {useTranslations} from 'next-intl';
import Link from "next/link"
import DemoSection from "./_components/DemoSection"
import PricingSection from "./_components/PricingSection"

export default function LandingPage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <main className="flex-1 mt-16 mb-9">

        {/* Hero Section */}
        <section className="
            w-full flex items-center justify-center text-center text-balance
            flex-col gap-8 px-4"
          style={{ height: "90svh" }}
        >
          <div className="flex flex-col gap-4">
            <h1 className="font-bold tracking-tighter text-5xl lg:text-6xl xl:text-7xl">
              {t("hero_title")}
            </h1>
            <p className="mx-auto text-lg lg:text-3xl max-w-screen-xl">
              {t("hero_desc")}
            </p>
          </div>
          <div className="space-x-4">
            <Link href="https://tarjousgeneraattori.vercel.app/" target="_blank">
              <Button className="text-lg p-6 rounded-lg">
                {t("call_to_action")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <Link href="/#demo">
              <Button variant="outline">
                {t("secondary_cta")}
              </Button>
            </Link>
            
          </div>
        </section>
        
        <DemoSection />

        <PricingSection />
      </main>
    </div>
  )
}