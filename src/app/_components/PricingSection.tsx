import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PricingSection() {

  return (
    <section id="pricing"
      className="w-full mx-auto max-w-screen-xl px-4 py-12 md:py-24 lg:py-32"
    >
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
    </section>
  );
}