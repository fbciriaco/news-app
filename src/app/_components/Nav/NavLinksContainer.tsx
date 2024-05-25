"use client";

import { useClientMediaQuery } from "@/app/_hooks/useClientMediaQuery";
import { MOCK_LINKS } from "@/app/_mock/mock";
import { CustomLink } from "../Link/Link";
import { BurgerNav } from "./BurgerNav";

export const NavLinksContainer = ({ isMobileSSR = false }) => {
  const isSmallerScreen = useClientMediaQuery("(max-width: 1024px)");

  return isMobileSSR || isSmallerScreen ? (
    <BurgerNav links={MOCK_LINKS} />
  ) : (
    <div className="flex gap-4">
      {MOCK_LINKS.map(({ path, text }) => (
        <CustomLink text={text} path={path} key={path} />
      ))}
    </div>
  );
};
