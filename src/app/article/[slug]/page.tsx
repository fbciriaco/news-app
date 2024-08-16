import serialize from "@/app/_components/ContentSerializer/serialize";
import ImageOnError from "@/app/_components/ImageOnError/ImageOnError";
import SectionContainer from "@/app/_components/Layout/SectionContainer";
import { mockArticle } from "@/app/_mock/mock";
import { ArticleData } from "@/app/_types/types";

import qs from "qs";

async function getArticle(slug: string) {
  const query = {
    slug: {
      equals: slug,
    },
  };
  try {
    const stringifiedQuery = qs.stringify(
      {
        where: query, // ensure that `qs` adds the `where` property, too!
      },
      { addQueryPrefix: true }
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles${stringifiedQuery}`
    );
    const data = await response.json();
    return (
      data.docs.map((doc: any) => ({
        ...doc,
        imageUrl: `${process.env.NEXT_PUBLIC_API_BASE}${doc.imageUrl?.url}`,
      })) || []
    );
  } catch (err) {
    console.error(err);
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const [article = {}] = await getArticle(params.slug);
  const { title, description, imageUrl, content } = article as ArticleData;

  const contentSerialized = serialize(content);

  return (
    <div className="flex-1">
      {imageUrl && (
        <ImageOnError
          imageUrl={imageUrl}
          className="w-full max-h-[400px] object-cover"
        />
      )}
      <SectionContainer customClasses="gap-[24px] flex flex-col">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-xl">{description}</p>
        <div>{contentSerialized}</div>
      </SectionContainer>
    </div>
  );
}
