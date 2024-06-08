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
    imageUrl: "https://picsum.photos/800/300",
    tags: ["technology", "news"],
    slug: "another-article",
    category: "Teste",
    featured: true,
  },
  {
    id: 3,
    title: "Third Article",
    author: "Bob Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishedAt: "12/04/2021",
    imageUrl: "https://picsum.photos/500/400",
    tags: ["technology", "news"],
    slug: "third-article",
    category: "Teste",
  },
  {
    id: 4,
    title: "Third Article 123",
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
  {
    id: 5,
    title: "Third Article 123456",
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
  {
    id: 6,
    title: "Third Article 123456",
    author: "Bob Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishedAt: "12/04/2021",
    imageUrl: "https://picsum.photos/300/400",
    tags: ["technology", "news"],
    slug: "third-article",
    category: "Teste",
  },
  {
    id: 7,
    title: "Third Article 123456",
    author: "Bob Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishedAt: "12/04/2021",
    imageUrl: "https://picsum.photos/500/400",
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
    path: "/time",
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

export const MOCK_COLUNISTAS = [
  {
    imageUrl: "https://picsum.photos/600/400",
    authorImage: "https://picsum.photos/600/400",
    author: "Maria Silva",
    publishedAt: "12/02/2021",
    title: "Article 1",
    url: "/article-1",
  },
  {
    imageUrl: "https://picsum.photos/600/400",
    authorImage: "https://picsum.photos/600/400",
    author: "Maria Silva 123",
    publishedAt: "12/02/2021",
    title: "Article 123",
    url: "/article-123",
  },
  {
    imageUrl: "https://picsum.photos/600/400",
    authorImage: "https://picsum.photos/600/400",
    author: "Leo Silva 1234",
    publishedAt: "12/03/2021",
    title: "Article 1234",
    url: "/article-1234",
  },
];

export const MOCK_TEAM_MEMBERS = [
  {
    imageUrl: "https://picsum.photos/id/64/4326/2884",
    authorImage: "https://picsum.photos/id/64/4326/2884",
    author: "Leo Silva 1234",
    role: "Reporter",
    email: "leo@gmail.com",
    phone: "0123456",
  },
  {
    imageUrl: "https://picsum.photos/id/64/4326/2884",
    authorImage: "https://picsum.photos/id/64/4326/2884",
    author: "Maria Silva 1234",
    role: "Reporter",
    email: "leo@gmail.com",
    phone: "0123456",
  },
  {
    imageUrl: "https://picsum.photos/id/64/4326/2884",
    authorImage: "https://picsum.photos/id/64/4326/2884",
    author: "Leia Silva 1234",
    role: "Reporter",
    email: "leo@gmail.com",
    phone: "0123456",
  },
];

export const MOCK_IMAGES = [
  "https://picsum.photos/600/400",
  "https://picsum.photos/600/300",
  "https://picsum.photos/600/800",
  "https://picsum.photos/600/900",
];
