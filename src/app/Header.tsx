'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LocaleSwitcher from './_components/LocaleSwitcher';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function Header() {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the main dropdown menu

  const linkClassName = 'text-sm font-medium hover:underline underline-offset-4';

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false); // Close the dropdown
      }
    };

    // Add event listener when the dropdown is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]); // Re-run effect when isMenuOpen changes

  return (
    <header className="p-4 lg:px-6 h-20 flex fixed w-full items-center bg-secondary text-white shadow-lg opacity-95 z-50 top-0">
      <Link className="flex items-center justify-center" href="/">
        <div className="relative h-10 w-40 md:h-10 md:w-48 lg:h-14 lg:w-64">
          <Image
            src="/Group24.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* Desktop view */}
      <div className="sm:flex hidden ml-auto">
        <nav className="flex gap-4 sm:gap-6 items-center justify-center">
          <Link className={`${linkClassName}`} href="/#demo">
            {t('demo')}
          </Link>
          <Link className={`${linkClassName}`} href="/catalogue">
            {t('catalogue')}
          </Link>
          <Link className={`${linkClassName}`} href="/contact_us">
            {t('contact')}
          </Link>
          <Link className={`${linkClassName}`} href="/about">
            {t('our_story')}
          </Link>
        </nav>
        <div className="mx-4">
          <LocaleSwitcher /> {/* LocaleSwitcher is separate */}
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex sm:hidden ml-auto items-center gap-4">
        

        {/* Hamburger menu button */}
        <button
          className="text-white hover:text-gray-200 focus:ring-1 focus:ring-ring focus:ring-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HamburgerMenuIcon width="1.5rem" height="1.5rem"/>
        </button>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div
            ref={dropdownRef} // Attach the ref to the main dropdown
            className="absolute top-20 left-0 right-0 bg-secondary text-white shadow-lg py-4 px-4 opacity-95 z-50"
          >
            <nav className="flex flex-col gap-4 mb-2 md:mb-0">
              <Link
                className={`${linkClassName} p-2`}
                href="/#demo"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('demo')}
              </Link>
              <Link
                className={`${linkClassName} p-2`}
                href="/catalogue"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('catalogue')}
              </Link>
              <Link
                className={`${linkClassName} p-2`}
                href="/contact_us"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link
                className={`${linkClassName} p-2`}
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('our_story')}
              </Link>
            </nav>

            <LocaleSwitcher mobileView={true} />
          </div>
        )}
      </div>
    </header>
  );
}