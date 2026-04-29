import { notFound } from "next/navigation";
import ArticleView from "@/components/article-view";
import { ARTICLES } from "@/lib/data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ id: String(a.id) }));
}

export async function generateMetadata({ params }) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const article = ARTICLES.find((a) => a.id === id);
  if (!article) return { title: "Not found — BasePsych" };
  return {
    title: `${article.title} — BasePsych`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const article = ARTICLES.find((a) => a.id === id);
  if (!article) notFound();
  return <ArticleView articleId={id}/>;
}
