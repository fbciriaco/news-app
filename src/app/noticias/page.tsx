import ColumnsContainer from "../_components/Layout/ColumnsContainer";

import { ArticleData, ColunistaType } from "@/app/_types/types";
import { ColunistaCard } from "../_components/ColunistaCard/ColunistaCard";
import SectionContainer from "../_components/Layout/SectionContainer";

import { mockArticles } from "@/app/_mock/mock";
import NewsColumns from "../_components/NewsColumns/NewsColumns";
import HeadlineFlex from "../_components/Headline/HeadlineFlex";
import NewsCard from "../_components/NewsCard/NewsCard";

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
