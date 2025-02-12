import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TriangleAlert, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ComparisonSection() {
  const t = useTranslations("ComparisonSection");

  const cards = [
    {
      title: "Pion Blanc",
      rows: [
        <><CheckCircle className="h-4 w-4 mr-1 inline text-green-500" /> {t("from")} <div className="text-lg inline font-bold">150€{t("per_month")}</div></>,
        <><CheckCircle className="h-4 w-4 mr-1 inline text-green-500" /> {t("efficient_proc")}</>,
        <><CheckCircle className="h-4 w-4 mr-1 inline text-green-500" /> {t("customizable")}</>,
        <><CheckCircle className="h-4 w-4 mr-1 inline text-green-500" /> {t("integrated_prod_data")}</>,
        <div className="text-green-500">{t("easy_and_efficient")}<CheckCircle className="h-6 w-6 ml-1 inline" /></div>,
      ],
    },
    {
      title: t("excel_template"),
      rows: [
        <><div className="text-lg inline font-bold">0€</div> {t("hidden_cost")}</>,
        <><TriangleAlert className="h-4 w-4 mr-1 inline text-yellow-600" /> {t("slow_and_errorprone")}</>,
        <><CheckCircle className="h-4 w-4 mr-1 inline text-green-500" /> {t("flexible")}</>,
        <><X className="h-6 w-6 mr-1 inline text-red-600" strokeWidth={4} /> {t("product_data_must_be_searched")}</>,
        <div className="text-yellow-600"> {t("takes_time_and_work")}<TriangleAlert className="h-6 w-6 ml-1 inline" /></div>,
      ],
    },
    {
      title: t("large_enterprise_software"),
      rows: [
        <><TriangleAlert className="h-4 w-4 mr-1 inline text-yellow-600" /> {t("from")} <div className="text-lg inline text-nowrap font-bold">500-2000+€{t("per_month")}</div>, {t("long_commitment_and_high_price")}</>,
        <><TriangleAlert className="h-4 w-4 mr-1 inline text-yellow-600" /> {t("efficient_no_tailoring")}</>,
        <><X className="h-6 w-6 mr-1 inline text-red-600" strokeWidth={4} /> {t("top_down_processes")}</>,
        <><X className="h-6 w-6 mr-1 inline text-red-600" strokeWidth={4} /> {t("manual_data_no_integration")}</>,
        <div className="text-red-600">{t("expensive_not_for_sme")}<X className="h-7 w-7 ml-1 inline" strokeWidth={4} /></div>,
      ],
    },
    {
      title: t("free_online_tool"),
      rows: [
        <><div className="text-lg inline font-bold">0€</div> {t("no_hidden_costs")}</>,
        <><X className="h-6 w-6 mr-1 inline text-red-600" strokeWidth={4} /> {t("limited_flexibility")}</>,
        <><X className="h-6 w-6 mr-1 inline text-red-600" strokeWidth={4} /> {t("product_data_must_be_searched")}</>,
        <div className="text-yellow-600">{t("requires_manual_work")}<TriangleAlert className="h-6 w-6 ml-1 inline" /></div>,
      ],
    },
  ];

  return (
    <section className="w-full mx-auto max-w-screen-xl px-6 xl:px-0 pt-12 md:pt-24 lg:pt-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">{t("title")}</h2>
      <div className="grid gap-4 lg:grid-cols-4 lg:gap-4">
        {cards.map((card, cardIndex) => (
          <Card key={cardIndex} className={`flex flex-col ${cardIndex===0 ? "scale-105 translate-y-2 shadow-xl border-2 border-primary " : ""}`}>
            <CardHeader>
              <CardTitle className="text-xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <ul className={`space-y-2 md:space-y-4`}>
                {card.rows.map((row, rowIndex) => (
                  rowIndex !== card.rows.length - 1 && <li key={rowIndex}>
                    {row}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 text-lg font-semibold">
                {card.rows[card.rows.length-1]}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}