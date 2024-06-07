import Link from "next/link";
import { ColunistaType } from "@/app/_types/types";
import AuthorImage from "../AuthorImage/AuthorImage";

export const ColunistaCard = ({ colunista }: { colunista: ColunistaType }) => {
  const { imageUrl, authorImage, author, publishedAt, title, url } = colunista;
  return (
    <Link href={url} data-testid="colunista-card" className="post">
      <div className="flex flex-col items-center justify-center shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-cover object-center"
        />
        <div className="bg-gray-100 p-4 w-full">
          <AuthorImage authorImage={authorImage} author={author} />
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <div className="flex items-center justify-between">
            <h2>{author}</h2>
            <p className="text-sm text-gray-500 text-center">{publishedAt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
