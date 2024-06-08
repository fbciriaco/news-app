import { ArticleData } from "@/app/_types/types";

import SectionContainer from "../_components/Layout/SectionContainer";
import NewsColumns from "../_components/NewsColumns/NewsColumns";
import NewsCard from "../_components/NewsCard/NewsCard";

import { mockArticles } from "@/app/_mock/mock";

export default async function NoticiasPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="flex-1">
      <SectionContainer title="Noticias">
        <NewsColumns>
          {mockArticles?.map((article: ArticleData) => (
            <NewsCard key={article.title} {...article} />
          ))}
        </NewsColumns>
      </SectionContainer>
    </div>
  );
}
