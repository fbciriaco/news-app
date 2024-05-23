import { get } from "./services";

export const getArticles = async () => {
  try {
    const response = await get("/articles");

    return response.docs.map((doc: any) => ({
      ...doc,
      imageUrl: `${process.env.NEXT_PUBLIC_API_BASE}${doc.imageUrl?.url}`,
    }));
  } catch (err) {
    console.error(err);
  }
};
