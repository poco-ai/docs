import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";

export const i18nUI = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: "English",
      chooseLanguage: "Choose language",
    },
    zh: {
      displayName: "简体中文",
      chooseLanguage: "选择语言",
    },
  },
});
