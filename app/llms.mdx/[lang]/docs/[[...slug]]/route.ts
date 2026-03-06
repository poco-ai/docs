import { getLLMText, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<"/llms.mdx/[lang]/docs/[[...slug]]">,
) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const page = source.getPage(slug, lang);
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      "Content-Type": "text/markdown",
    },
  });
}

export function generateStaticParams() {
  return source.generateParams("slug", "lang");
}
