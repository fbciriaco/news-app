import Link from "next/link";
import { CustomLinkType } from "@/app/_types/types";

export const CustomLink = ({ text, path, onClick }: CustomLinkType) => {
  return (
    <Link href={path} className="text-white text-sm" onClick={onClick}>
      {text}
    </Link>
  );
};
