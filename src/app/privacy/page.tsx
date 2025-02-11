import { useTranslations } from "next-intl";

export default function Privacy() {
  const t = useTranslations('Privacy');

  return (
    <div className="max-w-screen-md w-full mx-auto my-24 px-4 flex-1">
      <div className="py-20 lg:py-32 text-left">
        <h1 className="text-3xl font-bold">
          {t("title")}
        </h1>
        <p>
          {t("paragraph")}
        </p>
      </div>
    </div>
  )
}
