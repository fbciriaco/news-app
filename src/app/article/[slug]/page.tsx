import { GetServerSideProps } from "next";
import { mockArticles } from "@/app/mock/mock";
import { ArticleData } from "@/app/types/types";

async function getArticle(slug: string) {
  // const res = await fetch(`https://...`, { cache: 'no-store' })
  // const projects = await res.json()

  return new Promise((resolve) => {
    setTimeout(() => {
      const article = mockArticles.find((article) => article.slug === slug);
      resolve(article);
    }, 1000);
  });
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("🚀 ~ params:", params);
  const article = await getArticle(params.slug);
  const { title, content } = article as ArticleData;
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
