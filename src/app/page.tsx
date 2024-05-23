import HeadlineFlex from "@/app/_components/Headline/HeadlineFlex";
import HeadlineGrid from "@/app/_components/Headline/HeadlineGrid";

import { mockArticle } from "./_mock/mock";
import SectionContainer from "./_components/Layout/SectionContainer";
import { ArticleData } from "./_types/types";

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
  // const articles: ArticleData[] = await fetchArticles();

  return (
    <SectionContainer customClasses="my-[60px] flex-1">
      <main className="flex flex-col">
        <div style={{ border: 1 }}>
          <HeadlineFlex
            {...mockArticle}
            title="Este é um título teste para uma notícia"
            category="Teste"
            imageUrl="https://picsum.photos/600/400"
          />
          <HeadlineGrid
            title="Este é um título teste para outra notícia (usando grid)"
            category="Teste"
            imgUrl="https://picsum.photos/600/400?grayscale"
          />
          {/* <div className="flex flex-col gap-[20px]">
            {articles?.map((article: ArticleData) => (
              <HeadlineFlex key={article.id} {...article} />
            ))}
          </div> */}
        </div>
      </main>
    </SectionContainer>
  );
}
