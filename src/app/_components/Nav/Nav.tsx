import React from "react";

import SectionContainer from "../Layout/SectionContainer";
import { Logo } from "../Logo/Logo";
import { SearchInput } from "../SearchInput/SeachInput";
import { NavLinksContainer } from "./NavLinksContainer";
import { isMobileDeviceSSR } from "@/app/_utils/serverResponsive";

const Nav: React.FC = () => {
  const isMobileSSR = isMobileDeviceSSR();
  return (
    <nav className="h-[80px] bg-main flex w-full shadow-md">
      <SectionContainer customClasses="flex justify-between items-center !my-[10px]">
        <Logo />
        <div className="flex-1 ml-0 mr-12 md:mx-8">
          <SearchInput />
        </div>
        <NavLinksContainer isMobileSSR={isMobileSSR} />
      </SectionContainer>
    </nav>
  );
};

export default Nav;
