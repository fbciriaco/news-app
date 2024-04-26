import { ArticleData } from "../types/types";

export const mockArticle: ArticleData = {
  id: 1,
  title: "Sample Article",
  author: "John Doe",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  publishedAt: "12/02/2021",
  imageUrl: "https://picsum.photos/600/400",
  tags: ["technology", "news"],
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
  },
  {
    id: 3,
    title: "Third Article",
    author: "Bob Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishedAt: "12/04/2021",
    imageUrl: "https://picsum.photos/600/400",
    tags: ["technology", "news"],
  },
  { ...mockArticle },
];
