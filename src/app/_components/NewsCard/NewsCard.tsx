import React, { FC } from "react";
import Link from "next/link";
import { ArticleData } from "@/app/_types/types";
import "./NewsCard.css";

// interface NewsCardProps {
//   imageUrl: string;
//   category: string;
//   title: string;
//   description: string;
//   slug: string;
//   featured: boolean;
// }

const NewsCard: FC<ArticleData> = ({
  imageUrl,
  category,
  title,
  description,
  slug,
  featured,
}) => (
  <Link href={`/article/${slug}`} className="posts">
    <div className="bg-white flex flex-col items-center w-full  h-full">
      <div className="shadow-md bg-light-shades w-full flex-1 flex flex-col">
        <div className=" relative flex-1 flex flex-col">
          <img
            src={imageUrl}
            alt="Notícia"
            className={`h-40 w-full object-cover mx-auto ${
              featured ? "!h-full !w-full absolute top-0 " : ""
            }`}
          />
          <div
            className={`NewsCard__description mx-2 z-10 text-dark-accent ${
              featured ? "text-white mt-auto mb-4" : ""
            }`}
          >
            <h1 className="text-2xl font-bold mt-4">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default NewsCard;
