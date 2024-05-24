import Link from "next/link";
import SectionContainer from "../Layout/SectionContainer";

type CategoriesNavProps = {
  links: {
    path: string;
    text: string;
  }[];
};

export const CategoriesNav = ({ links }: CategoriesNavProps) => {
  return (
    <div className="w-full bg-dark-shades text-textColorSecondary shadow-md">
      <SectionContainer customClasses="flex gap-9 py-2 mx-auto max-w-max">
        {links.map(({ path, text }) => (
          <Link href={path} key={text}>
            {text}
          </Link>
        ))}
      </SectionContainer>
    </div>
  );
};
