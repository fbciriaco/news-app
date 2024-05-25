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

export type NavItems = {
  text: string;
  path: string;
  type: "link" | "dropdown";
};

export type CustomLinkType = {
  text: string;
  path: string;
};
