import HeadlineFlex from "@/app/_components/Headline/HeadlineFlex";
import SectionContainer from "@/app/_components/Layout/SectionContainer";
import NewsColumns from "@/app/_components/NewsColumns/NewsColumns";
import { ArticleData } from "@/app/_types/types";

import qs from "qs";

async function getCategories(slug: string) {
  const slugCapitilized = slug.charAt(0).toUpperCase() + slug.slice(1);
  const query = {
    category: {
      equals: slugCapitilized,
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query,
    },
    { addQueryPrefix: true }
  );
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles${stringifiedQuery}`
  );
  const data = await response.json();
  return data.docs.map((doc: any) => ({
    ...doc,
    imageUrl: `${process.env.NEXT_PUBLIC_API_BASE}${doc.imageUrl?.url}`,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const articles: ArticleData[] = await getCategories(params.slug);
  return (
    <div className="flex-1">
      <SectionContainer>
        <NewsColumns>
          {articles?.map((article: ArticleData) => (
            <HeadlineFlex key={article.id} {...article} />
          ))}
        </NewsColumns>
      </SectionContainer>
    </div>
  );
}
