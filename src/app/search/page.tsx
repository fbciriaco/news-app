import SectionContainer from "@/app/_components/Layout/SectionContainer";
import HeadlineFlex from "../_components/Headline/HeadlineFlex";
import { ArticleData } from "@/app/_types/types";

import qs from "qs";

async function searchArticle(searchQuery: string | string[]) {
  const query = {
    title: {
      like: searchQuery,
    },
  };
  try {
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
    return (
      data.docs.map((doc: any) => ({
        ...doc,
        imageUrl: `${process.env.NEXT_PUBLIC_API_BASE}${doc.imageUrl?.url}`,
      })) || []
    );
  } catch (err) {
    console.error(err);
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams.q) return null;
  const articles = await searchArticle(searchParams.q);

  return (
    <div className="flex-1">
      <SectionContainer>
        <div className="flex flex-col gap-[20px]">
          {articles?.map((article: ArticleData) => (
            <HeadlineFlex key={article.id} {...article} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
