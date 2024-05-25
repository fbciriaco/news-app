import { ArticleData, NavItems } from "../_types/types";

export const mockArticle: ArticleData = {
  id: 1,
  title: "Sample Article",
  author: "John Doe",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  publishedAt: "12/02/2021",
  imageUrl: "https://picsum.photos/600/400",
  tags: ["technology", "news"],
  category: "Teste",
  slug: "sample-article",
};

export const mockArticles: ArticleData[] = [
  {
    id: 2,
    title: "Another Article",
    author: "Jane Smith",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishedAt: "12/03/2021",
    imageUrl: "https://picsum.photos/600/400",
    tags: ["technology", "news"],
    slug: "another-article",
    category: "Teste",
  },
  {
    id: 3,
    title: "Third Article",
    author: "Bob Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishedAt: "12/04/2021",
    imageUrl: "https://picsum.photos/600/400",
    tags: ["technology", "news"],
    slug: "third-article",
    category: "Teste",
  },
  { ...mockArticle },
];

export const MOCK_LINKS: NavItems[] = [
  {
    text: "Home",
    path: "/",
    type: "link",
  },
  {
    text: "Noticias",
    path: "/noticias",
    type: "link",
  },
  {
    text: "Entrevistas",
    path: "/entrevistas",
    type: "link",
  },
  {
    text: "Painel de Noticias",
    path: "/painel",
    type: "link",
  },
  {
    text: "Vagas de Emprego",
    path: "/vagas",
    type: "link",
  },
  {
    text: "Colunistas",
    path: "/colunistas",
    type: "link",
  },
  {
    text: "Quem Somos",
    path: "/quem-somos",
    type: "link",
  },
];
// Brasil, Cidades, Economia, Educação, Esportes, Internacional, Política, Saúde, Tecnologia
export const MOCK_CATEGORIES = [
  {
    text: "Brasil",
    path: "category/brasil",
  },
  {
    text: "Cidades",
    path: "category/cidades",
  },
  {
    text: "Economia",
    path: "category/economia",
  },
  {
    text: "Educação",
    path: "category/educacao",
  },
  {
    text: "Esportes",
    path: "category/esportes",
  },
  {
    text: "Internacional",
    path: "category/internacional",
  },
  {
    text: "Política",
    path: "category/politica",
  },
  {
    text: "Saúde",
    path: "category/saude",
  },
  {
    text: "Tecnologia",
    path: "category/tecnologia",
  },
];
