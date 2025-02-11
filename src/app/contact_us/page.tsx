import { MailIcon, PhoneCallIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations('ContactUs');

  const cardClasses = "flex justify-around mt-12 py-4 px-5"
  const commonDivClasses ="flex flex-col gap-3 md:text-md lg:text-lg text-left text-balance justify-center"
  const imageClasses = "rounded-full object-contain my-6"
  return (
    <div className="max-w-screen-md w-full mx-auto my-24 px-4 flex-1">
      <div className="py-20 lg:py-32 text-left">
        <h1 className="text-3xl font-bold">
          {t("title")}
        </h1>
        <p className="md:text-md lg:text-lg text-left text-balance">
          {t("paragraph")}
        </p>
        
        <Card className={cardClasses}>
          <div className={commonDivClasses}>
            <h1 className="font-bold">Jan Härkönen (CEO)</h1>
            <p className="flex items-center">
              <PhoneCallIcon className="mr-2" /><span>+358 50 46 46 745</span>
            </p>
            <p className="flex items-center">
              <MailIcon className="mr-2" /> <span>jan.harkonen@gmail.com</span>
            </p>
          </div>
          <Image
            src="/jan.jpg"
            alt=""
            width={80}
            height={80}
            className={imageClasses}
          />
        </Card>

        <Card className={cardClasses}>
          <div className={commonDivClasses}>
            <h1 className="font-bold">Lauri Vaara</h1>
            <p className="flex items-center">
              <PhoneCallIcon className="mr-2" /><span>+358 50 553 7079</span>
            </p>
            <p className="flex items-center">
              <MailIcon className="mr-2" /> <span>Lauri.vaara385@gmail.com</span>
            </p> 
          </div>
          <Image
            src="/lauri.png"
            alt=""
            width={80}
            height={80}
            className={imageClasses}
          />
        </Card>

        <Card className={cardClasses}>
          <div className={commonDivClasses}>
            <h1 className="font-bold">Ville Strengell</h1>
            <p className="flex items-center">
              <PhoneCallIcon className="mr-2" /><span>+358 50 494 5684</span>
            </p>
            <p className="flex items-center">
              <MailIcon className="mr-2" /> <span>villes-97@hotmail.com</span>
            </p>
          </div>
          <Image
            src="/ville.jpg"
            alt=""
            width={80}
            height={80}
            className={imageClasses}
          />
        </Card>
      </div>
    </div>
  )
}
