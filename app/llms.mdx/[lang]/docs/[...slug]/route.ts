import { getLLMText, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";

export const revalidate = false;

function getPageSlug(slug: string[]) {
  const last = slug.at(-1);
  if (!last?.endsWith(".mdx")) {
    notFound();
  }

  const pageName = last.slice(0, -".mdx".length);
  if (pageName === "index") {
    return slug.slice(0, -1);
  }

  return [...slug.slice(0, -1), pageName];
}

function getMarkdownSlug(slugs: string[]) {
  if (slugs.length === 0) {
    return ["index.mdx"];
  }

  return [...slugs.slice(0, -1), `${slugs.at(-1)}.mdx`];
}

export async function GET(
  _req: Request,
  { params }: RouteContext<"/llms.mdx/[lang]/docs/[...slug]">,
) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const page = source.getPage(getPageSlug(slug), lang);
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      "Content-Type": "text/markdown",
    },
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getMarkdownSlug(page.slugs),
  }));
}
