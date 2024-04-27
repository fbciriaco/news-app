import { ArticleData } from "@/app/types/types";
import Link from "next/link";

export default function HeadlineFlex({
  imageUrl,
  category,
  title,
  description,
  slug,
}: ArticleData) {
  return (
    <Link href={`/article/${slug}`}>
      <div className="bg-white mx-auto flex flex-col items-center w-full max-w-[500px]">
        <div className="p-4 rounded-lg shadow-md bg-light-shades w-full">
          <div className="text-main text-sm font-semibold uppercase mb-2 items-start">
            {category}
          </div>
          <div className="items-center">
            <img
              src={imageUrl}
              alt="Notícia"
              className="h-40 w-full rounded-lg object-cover mx-auto"
            />
            <h1 className="text-2xl font-bold mt-4 text-dark-accent">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
