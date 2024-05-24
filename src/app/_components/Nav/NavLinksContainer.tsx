"use client";

import { useClientMediaQuery } from "@/app/_hooks/useClientMediaQuery";
import { MOCK_LINKS } from "@/app/_mock/mock";
import { CustomLink } from "../Link/Link";

export const NavLinksContainer = () => {
  const isSmallerScreen = useClientMediaQuery("(max-width: 1024px)");
  return !isSmallerScreen ? (
    <div className="flex gap-4">
      {MOCK_LINKS.map(({ path, text }) => (
        <CustomLink text={text} path={path} key={path} />
      ))}
    </div>
  ) : (
    <div>nav</div>
  );
};
