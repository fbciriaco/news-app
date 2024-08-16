import { ArticleData } from "@/app/_types/types";

import SectionContainer from "../_components/Layout/SectionContainer";
import NewsColumns from "../_components/NewsColumns/NewsColumns";
import NewsCard from "../_components/NewsCard/NewsCard";

import { mockArticles } from "@/app/_mock/mock";

const fetchArticles = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
    const data = await response.json();

    return data.docs.map((doc: any) => ({
      ...doc,
      imageUrl: `${process.env.NEXT_PUBLIC_API_BASE}${doc.imageUrl?.url}`,
    }));
  } catch (err) {
    console.error(err);
  }
};

export default async function NoticiasPage({
  params,
}: {
  params: { slug: string };
}) {
  const articles: ArticleData[] = await fetchArticles();

  return (
    <div className="flex-1">
      <SectionContainer title="Noticias">
        <NewsColumns>
          {articles?.map((article: ArticleData) => (
            <NewsCard key={article.title} {...article} />
          ))}
        </NewsColumns>
      </SectionContainer>
    </div>
  );
}
