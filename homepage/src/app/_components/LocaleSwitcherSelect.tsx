'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

import {Locale} from '@/i18n/config';
import {setUserLocale} from '@/lib/locale';
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";


type Props = {
  defaultValue: string;
  items: Array<{value: string; label: string}>;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  function onChange(value: string) {
    const locale = value as Locale;
    setUserLocale(locale);
    setIsDropdownOpen(false);
  }
  const [scrollbarWidth, setScrollbarWidth] = useState('');
  const [scrollBarIsVisible, setScrollBarIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScrollbarWidth((window.innerWidth - document.body.clientWidth) + 'px');
      setScrollBarIsVisible(isDropdownOpen && (document.body.clientHeight > window.innerHeight));
    }
  }, [isDropdownOpen]);

  return (
    <div className="relative"
      style={{ paddingRight: scrollBarIsVisible ? `${scrollbarWidth}` : "0px" }}>
      <Select
        defaultValue={defaultValue}
        onValueChange={onChange}
        onOpenChange={setIsDropdownOpen}
      >
        <SelectTrigger className="flex gap-2">
          <Globe style={{ height: "1.2rem" }}/>
          {/* <SelectValue placeholder="Select Language" /> */}
        </SelectTrigger>
        <SelectContent >
          {items.map((item) => (
            <SelectItem
              key={item.value}
              className="flex cursor-default items-center px-3 text-base data-[highlighted]:bg-slate-100"
              value={item.value}
            >
              <div className="mr-2 w-[1rem]">
                {item.value === defaultValue}
              </div>
              <span className="text-slate-900">{item.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

    </div>
  );
}