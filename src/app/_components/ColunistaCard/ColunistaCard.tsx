import Link from "next/link";
import SectionContainer from "../Layout/SectionContainer";
import { ColunistaType } from "@/app/_types/types";

export const ColunistaCard = ({ colunista }: { colunista: ColunistaType }) => {
  const { imageUrl, authorImage, author, publishedAt, title } = colunista;
  return (
    <Link href="asdsad">
      <div
        className="flex flex-col items-center justify-center shadow-lg"
        data-testid="colunista-card"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-cover object-center"
        />
        <div className="bg-gray-100 p-4 w-full">
          <img
            src={authorImage}
            alt={author}
            className="w-12 h-12 rounded-full object-cover object-center"
          />
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
