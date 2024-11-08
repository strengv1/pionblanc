import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div>

      <section className="w-full py-12 md:py-32 lg:py-48 xl:py-56 flex items-center" style={{height: "90vh"}}>
        <div className="container mx-auto max-w-[1200px] px-4 md:px-6 ">
        
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Ajansäästäjä pienyrittäjille
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Automatisoi tarjouspyyntösi hetkessä!
              </p>
            </div>
            <div className="space-x-4">
              <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Kokeile Nyt
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Katso Demo</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-slate-300 mx-auto flex flex-col md:flex-row"> {/*  px-4 sm:px-6 lg:px-8 py-16  */}
        
        {/* Left Fixed Column */}
        <div className="w-full md:w-1/2 py-4">
          <div className="w-full sm:px-2 md:px-4 lg:px-6 px-2 sticky top-20 md:top-32 lg:top-40 "> {/* top-1/2 transform -translate-y-1/2 */}
            <div className="p-4 bg-gray-100 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4">Demo</h2>
              <p className="my-20">Video / animaatio tuotteesta.</p>
            </div>
          </div>
        </div>
        
        {/* Right scrolling Column */}
        <div className="w-full md:w-1/2 my-8 md:my-16">
          <div className="flex flex-col">
            <div className="p-4 bg-white rounded shadow-md mb-12 md:mb-96">
              <h3 className="text-xl font-semibold">Scrollable Content 1</h3>
              <p>Some scrollable content goes here. Add more content as needed.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md my-12 md:my-96">
              <h3 className="text-xl font-semibold">Scrollable Content 2</h3>
              <p>More scrollable content goes here. Keep adding content to test scrolling.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md mt-12 md:mt-96">
              <h3 className="text-xl font-semibold">Scrollable Content 3</h3>
              <p>Additional content to scroll. You can add images, text, etc.</p>
            </div>
            {/* Add more content sections as needed */}
          </div>
        </div>
      </section>
      
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

    </div>
  )
}