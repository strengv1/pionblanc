"use client"

import "../styles/frontpage.css"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

import {useTranslations} from 'next-intl';
import Link from "next/link"
import DemoSection from "./components/DemoSection"

export default function LandingPage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <main className="flex-1 mt-16 mb-9">
        <section className="
            w-full flex items-center justify-center text-center text-balance
            flex-col gap-8 px-4"
          style={{height: "90svh"}}
        >
          <div className="flex flex-col gap-4">
            <h1 className="font-bold tracking-tighter text-5xl lg:text-6xl xl:text-8xl">
              {t("hero_title")}
            </h1>
            <p className="mx-auto text-lg lg:text-3xl max-w-screen-xl">
              {t("hero_desc")}
            </p>
          </div>
          <div className="space-x-4">
            <Button className="text-lg p-6 rounded-lg">
              {t("call_to_action")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/#demo">
              <Button variant="outline">
                {t("secondary_cta")}
              </Button>
            </Link>
            
          </div>
           
        </section>
        
        <DemoSection />

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {["Basic", "Pro", "Enterprise"].map((plan, index) => (
                <Card key={plan}>
                  <CardHeader>
                    <CardTitle>{plan}</CardTitle>
                    <CardDescription>
                      {index === 0 ? "For individuals" : index === 1 ? "For small teams" : "For large organizations"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">
                      ${index === 0 ? "9" : index === 1 ? "29" : "99"}
                      <span className="text-sm font-normal">/month</span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[
                        "100 invoices/month",
                        "Email support",
                        index > 0 && "API access",
                        index > 1 && "Dedicated account manager",
                      ]
                        .filter(Boolean)
                        .map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Choose Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}