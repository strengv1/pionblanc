export type Locale = (typeof locales)[number];

export const locales = ["fi", "en"] as const;
export const defaultLocale: Locale = "fi"