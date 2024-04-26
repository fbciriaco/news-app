import HeadlineFlex from "@/app/components/Headline/HeadlineFlex";
import HeadlineGrid from "@/app/components/Headline/HeadlineGrid";
import { mockArticle, mockArticles } from "./mockl/mock";

export default function Home() {
  return (
    <div>
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
          <div className="flex flex-col gap-[20px]">
            {mockArticles.map((article) => (
              <HeadlineFlex key={article.id} {...article} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
