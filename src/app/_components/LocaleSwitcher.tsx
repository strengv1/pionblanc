import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { Button } from '@/components/ui/button';
import {setUserLocale} from '@/lib/locale';

interface LocaleSwitcherProps {
  mobileView?: boolean
}

export default function LocaleSwitcher(
  { mobileView = false }: LocaleSwitcherProps
) {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const mobileButtonClasses = "text-sm px-8 py-2 font-medium hover:underline hover:bg-transparent hover:text-inherit underline-offset-4"
  if (mobileView) {
    return (
      <div className="flex justify-center items-center gap-2">
        <Button
          variant="ghost"
          className={`${mobileButtonClasses} ${
            locale === 'fi' ? 'text-white font-bold' : 'text-gray-300'
          }`}
          onClick={() => setUserLocale("fi")}
        >
          {t('fi')}
        </Button>
        <span className="text-gray-300">|</span>
        <Button
          variant="ghost"
          className={`${mobileButtonClasses} ${
            locale === 'en' ? 'text-white font-bold' : 'text-gray-300'
          }`}
          onClick={() => setUserLocale("en")}
        >
          {t('en')}
        </Button>
      </div>
    )
  } else {
    return (
      <LocaleSwitcherSelect
        defaultValue={locale}
        items={[
          {
            value: 'en',
            label: t('en')
          },
          {
            value: 'fi',
            label: t('fi')
          }
        ]}
      />
    );
  }
  
}