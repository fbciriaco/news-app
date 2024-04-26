import HeadlineFlex from "@/components/Headline/HeadlineFlex";
import HeadlineGrid from "@/components/Headline/HeadlineGrid";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>Noticias Inventadas</h1>
    </main>
    <div style={{border: 1 }}>
      <HeadlineFlex
      title="Este é um título teste para uma notícia"
      category="Teste"
      imgUrl="https://picsum.photos/600/400"
      /> 
      <HeadlineGrid
      title="Este é um título teste para outra notícia (usando grid)"
      category="Teste"
      imgUrl="https://picsum.photos/600/400?grayscale"
      /> 
    </div>
  )
}