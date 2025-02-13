import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations('OurStory');

  const teamMembers = [
    {
      name: "Jan",
      quote: t("QuoteJan"),
      image: "/jan.jpg"
    },
    {
      name: "Lauri",
      quote: t("QuoteLauri"),
      image: "/lauri.png"
    },
    {
      name: "Ville",
      quote: t("QuoteVille"),
      image: "/ville.jpg"
    }
  ];

  const paragraphClass = "md:text-md lg:text-lg text-balance";
  return (
    <div className="my-24">
      <div className="max-w-screen-xl w-full mx-auto px-4">
        <div className="flex flex-col gap-6 pt-20 pb-10 lg:pt-32 lg:pb-20 text-left">
          <h1 className="text-xl sm:text-3xl font-bold">{t("title")}</h1>
          <p className={paragraphClass}>{t("paragraph1")}</p>
          <p className={paragraphClass}>{t("paragraph2")}</p>
          <p className={paragraphClass}>{t("paragraph3")}</p>
          <p className={paragraphClass}>{t("paragraph4")}</p>
          <p className={paragraphClass}>{t("paragraph5")}</p>
        </div>
      </div>
      
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 justify-items-center bg-secondary gap-6 overflow-hidden">
        {teamMembers.map((member, index) => (
          <Card key={index} className="w-full md:w-64 lg:w-80 h-80 flex flex-col items-center text-secondary text-center bg-white shadow-lg rounded-lg border-black">
            <div className="w-full h-48 flex items-center justify-center overflow-hidden">
              <Image
                src={member.image}
                alt={member.name + "_image"}
                width={140}
                height={140}
                className="rounded-full object-contain mt-4"
              />
            </div>
            <CardContent className="flex-1 flex flex-col justify-center px-4">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-700 italic">&quot;{member.quote}&quot;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}