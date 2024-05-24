import React from "react";

import SectionContainer from "../Layout/SectionContainer";
import { Logo } from "../Logo/Logo";
import { SearchInput } from "../SearchInput/SeachInput";
import { NavLinksContainer } from "./NavLinksContainer";

const Nav: React.FC = () => {
  return (
    <nav className="h-[80px] bg-main flex w-full shadow-md">
      <SectionContainer customClasses="flex justify-between items-center py-[10px]">
        <Logo />
        <div className="flex-1 mx-8">
          <SearchInput />
        </div>
        <NavLinksContainer />
      </SectionContainer>
    </nav>
  );
};

export default Nav;
