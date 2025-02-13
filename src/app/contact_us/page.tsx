import { MailIcon, PhoneCallIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations('ContactUs');

  const cardClasses = "flex flex-col py-2 xs:flex-row items-center justify-around"
  const commonDivClasses = "flex flex-col gap-3 md:text-md lg:text-lg text-left text-balance"
  const imageClasses = "rounded-full object-contain my-6"
  return (
    <div className="max-w-screen-xl w-full mx-auto my-24 px-4">
      <div className="flex flex-col gap-6 pt-20 pb-10 lg:pt-32 lg:pb-20 text-left">
        <h1 className="text-xl sm:text-3xl font-bold">
          {t("title")}
        </h1>
        <p className="md:text-md lg:text-lg text-balance">
          {t("paragraph")}
        </p>
      </div>
      
      <div className="grid grid-cols-1 mx-0 md:mx-40 xl:mx-0 xl:grid-cols-3 gap-4 ">
        <Card className={cardClasses}>
          <div className={commonDivClasses}>
            <h1 className="font-bold">Jan Härkönen (CEO)</h1>
            <p className="flex items-center">
              <PhoneCallIcon className="mr-2" /><span>+358 50 46 46 745</span>
            </p>
            <p className="flex items-center">
              <MailIcon className="mr-2" /> <span>jan.harkonen@pionblanc.fi</span>
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
              <MailIcon className="mr-2" /> <span>lauri.vaara@pionblanc.fi</span>
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
              <MailIcon className="mr-2" /> <span>ville.strengell@pionblanc.fi</span>
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
