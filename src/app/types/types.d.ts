// make article type

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
};

export type ArticleList = ArticleData[];
