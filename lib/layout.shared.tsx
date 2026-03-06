import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "@/lib/i18n";

export const gitConfig = {
  user: "poco-ai",
  repo: "poco-agent",
  branch: "main",
};

export function baseOptions(lang = i18n.defaultLanguage): BaseLayoutProps {
  return {
    nav: {
      title: "Poco Docs",
      url: `/${lang}`,
    },
    i18n,
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
