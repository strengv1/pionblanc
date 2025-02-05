import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const companies = [
  { name: "Axor", logo: "\/axor-logo.svg", url: "https://www.axor-design.com/fi" },
  { name: "Damixa", logo: "\/damixa-logo.png", url: "https://damixa.fi/"},
  { name: "Hansgrohe", logo: "\/hansgrohe-logo.png", url: "https://www.hansgrohe.fi" },
  { name: "Ido", logo: "\/ido-logo.png", url: "https://ido.fi" },
  { name: "Oras", logo: "\/oras-logo.png", url: "https://www.oras.com/fi/etusivu" },
  { name: "Otsoson", logo: "\/otsoson-logo.png", url: "https://otsoson.com" },
  { name: "Rejdesign", logo: "\/rejdesign-logo.png", url: "https://rejdesign.fi/" },
  { name: "Scandtap", logo: "\/scandtap-logo.png", url: "https://scandtap.com/en/" },
  { name: "Smedbo", logo: "\/smedbo-logo.png", url: "https://www.smedbo.fi/" },
  { name: "Svedbergs", logo: "\/svedbergs-logo.webp", url: "https://www.svedbergs.fi/" },
  { name: "Tapwell", logo: "\/tapwell-logo.png", url: "https://www.tapwell.fi/" },
  { name: "Temal", logo: "\/temal-logo.svg", url: "https://temal.fi/" },
  { name: "Haven", logo: "\/haven-logo.png", url: "https://haven-system.com/" },
  { name: "Vieser", logo: "\/vieser-logo.png", url: "https://www.vieser.fi/" },
  { name: "INR", logo: "\/inr-logo.png", url: "https://www.inr.fi/" },
  { name: "Duravit", logo: "\/duravit-logo.png", url: "https://www.duravit.com/" },
  { name: "Nordhem", logo: "\/nordhem-logo.png", url: "https://nordhem.se/" },
]

export default function LogoGrid() {
  return (
    <div className="container mx-auto mt-24 pb-12 flex-1">
      <h1 className="text-3xl font-bold text-center mb-8">Katalogi</h1>
      <p className="text-md text-balance text-center mb-16">Näiden yritysten tuotedatat meillä jo on.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <Link href={company.url} target="_blank" rel="noopener noreferrer">
            <Card key={index} className="overflow-hidden hover:shadow-lg hover:scale-105 transition">
          
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={150}
                    height={200}
                    className="object-contain w-auto h-20 sm:h-24"
                    loading="lazy"
                  />
                  <h2 className="text-lg font-semibold text-center">{company.name}</h2>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

