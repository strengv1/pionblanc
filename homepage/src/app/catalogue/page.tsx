import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const companies = [
  { name: "Axor", logo: "/placeholder.svg?height=80&width=80" }, // https://www.axor-design.com/fi/
  { name: "Damixa", logo: "/placeholder.svg?height=80&width=80" }, // https://damixa.fi/
  { name: "Hansgrohe", logo: "/placeholder.svg?height=80&width=80" }, // https://www.hansgrohe.fi/
  { name: "Ido", logo: "/placeholder.svg?height=80&width=80" }, // https://ido.fi
  { name: "Otsoson", logo: "/placeholder.svg?height=80&width=80" }, // https://otsoson.com
  { name: "Rejdesign", logo: "/placeholder.svg?height=80&width=80" }, // https://rejdesign.fi/
  { name: "Scandtap", logo: "/placeholder.svg?height=80&width=80" }, // https://scandtap.com/en/
  { name: "Smedbo", logo: "/placeholder.svg?height=80&width=80" }, // https://www.smedbo.fi/
  { name: "Svedbergs", logo: "/placeholder.svg?height=80&width=80" }, // https://www.svedbergs.fi/
  { name: "Tapwell", logo: "/placeholder.svg?height=80&width=80" }, // https://www.tapwell.fi/
  { name: "Temal", logo: "/placeholder.svg?height=80&width=80" }, // https://temal.fi/
  { name: "Hietakari", logo: "/placeholder.svg?height=80&width=80" }, // https://www.hietakari.fi/fi/
  { name: "Haven", logo: "/placeholder.svg?height=80&width=80" }, // https://haven-system.com/
  { name: "Vieser", logo: "/placeholder.svg?height=80&width=80" }, // https://www.vieser.fi/
]

export default function LogoGrid() {
  return (
    <div className="container mx-auto mt-24 pb-12 flex-1">
      <h1 className="text-3xl font-bold text-center mb-8">Katalogi</h1>
      <p className="text-md text-balance text-center mb-16">Näiden yritysten tuotedatat meillä jo on.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h2 className="text-lg font-semibold text-center">{company.name}</h2>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

