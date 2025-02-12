import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useTranslations } from "next-intl";

const companies = [
  { name: "Axor", logo: "/logos/axor-logo.svg", url: "https://www.axor-design.com/fi" },
  { name: "Damixa", logo: "/logos/damixa-logo.png", url: "https://damixa.fi/"},
  { name: "Hansgrohe", logo: "/logos/hansgrohe-logo.png", url: "https://www.hansgrohe.fi" },
  { name: "Ido", logo: "/logos/ido-logo.png", url: "https://ido.fi" },
  { name: "Oras", logo: "/logos/oras-logo.png", url: "https://www.oras.com/fi/etusivu" },
  { name: "Otsoson", logo: "/logos/otsoson-logo.png", url: "https://otsoson.com" },
  { name: "Rejdesign", logo: "/logos/rejdesign-logo.png", url: "https://rejdesign.fi/" },
  { name: "Scandtap", logo: "/logos/scandtap-logo.png", url: "https://scandtap.com/en/" },
  { name: "Smedbo", logo: "/logos/smedbo-logo.png", url: "https://www.smedbo.fi/" },
  { name: "Svedbergs", logo: "/logos/svedbergs-logo.webp", url: "https://www.svedbergs.fi/" },
  { name: "Tapwell", logo: "/logos/tapwell-logo.png", url: "https://www.tapwell.fi/" },
  { name: "Temal", logo: "/logos/temal-logo.svg", url: "https://temal.fi/" },
  { name: "Haven", logo: "/logos/haven-logo.png", url: "https://haven-system.com/" },
  { name: "Vieser", logo: "/logos/vieser-logo.png", url: "https://www.vieser.fi/" },
  { name: "INR", logo: "/logos/inr-logo.png", url: "https://www.inr.fi/" },
  { name: "Duravit", logo: "/logos/duravit-logo.png", url: "https://www.duravit.com/" },
  { name: "Nordhem", logo: "/logos/nordhem-logo.png", url: "https://nordhem.se/" },
]

export default function LogoGrid() {
  const t = useTranslations('Catalogue');

  return (
    <div className="w-full flex flex-col items-center my-24">
      <div className="max-w-screen-xl py-20 lg:py-32 text-left mx-5 md:mx-20 lg:mx-40
                      flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{t("catalogue")}</h1>

        <p className="text-xl font-normal text-balance">{t("main_text_bold")}</p>
      </div>
      
      <div className="grid max-w-screen-xl mx-10 grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {companies.map((company, index) => (
          <Link key={index} href={company.url} target="_blank" rel="noopener noreferrer">
            <Card className="overflow-hidden hover:shadow-lg hover:scale-105 transition">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={150}
                    height={200}
                    className="object-contain w-24 sm:w-32 md:w-40 lg:w-48 h-10 sm:h-20 md:h-24"
                    loading="lazy"
                  />
                  <h2 className="text-lg font-semibold text-center">{company.name}</h2>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="max-w-screen-xl py-20 lg:py-32 text-left mx-5 md:mx-20 lg:mx-40
                      flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-balance">
          {t("main_text_normal_start")}
        </h1>
        <p className="text-xl font-normal text-balance">
          <Link href="/contact_us" className="border-b-2 border-primary internal-link">{t("let_us_know_your_needs")}</Link>
          {t("main_text_normal_end")} 
        </p>
      </div>
    </div>
  )
}

