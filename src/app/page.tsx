import HeadlineFlex from "@/app/_components/Headline/HeadlineFlex";
import HeadlineGrid from "@/app/_components/Headline/HeadlineGrid";

import { mockArticle } from "./_mock/mock";
import SectionContainer from "./_components/Layout/SectionContainer";
import { ArticleData } from "./_types/types";
import ColumnsContainer from "./_components/Layout/ColumnsContainer";

const fetchArticles = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
    const data = await response.json();
    console.log("🚀 ~ fetchArticles ~ data:", data);

    return data.docs.map((doc: any) => ({
      ...doc,
      imageUrl: `${process.env.NEXT_PUBLIC_API_BASE}${doc.imageUrl?.url}`,
    }));
  } catch (err) {
    console.error(err);
  }
};

export default async function Home() {
  const articles: ArticleData[] = await fetchArticles();

  const leftSideBar = (
    <div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );

  return (
    <SectionContainer customClasses="flex-1 flex">
      <aside className="w-[25%] hidden md:flex p-4 pt-0 mr-2">
        {leftSideBar}
      </aside>
      <main className="flex flex-col">
        <ColumnsContainer>
          <HeadlineFlex
            {...mockArticle}
            title="Este é um título teste para uma notícia"
            category="Teste"
            imageUrl="https://picsum.photos/600/400"
          />
          <HeadlineGrid
            title="Este é um título teste para outra notícia (usando grid)"
            category="Teste"
            imageUrl="https://picsum.photos/600/400?grayscale"
          />

          {articles?.map((article: ArticleData) => (
            <HeadlineFlex key={article.id} {...article} />
          ))}
        </ColumnsContainer>
      </main>
    </SectionContainer>
  );
}
