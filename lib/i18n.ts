import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
  languages: ["en", "zh"],
  defaultLanguage: "zh",
  hideLocale: "never",
  parser: "dir",
});

export type Locale = (typeof i18n.languages)[number];

export function isLocale(value: string): value is Locale {
  return i18n.languages.includes(value as Locale);
}
