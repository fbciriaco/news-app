export type ArticleData = {
  id: number;
  title: string;
  description: string;
  author: string;
  content: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
  tags: string[];
  slug: string;
};

export type ArticleList = ArticleData[];
// test change
