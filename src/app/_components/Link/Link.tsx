import Link from "next/link";
import { CustomLinkType } from "@/app/_types/types";

export const CustomLink = ({ text, path }: CustomLinkType) => {
  return (
    <Link href={path} className="text-white text-sm">
      {text}
    </Link>
  );
};
