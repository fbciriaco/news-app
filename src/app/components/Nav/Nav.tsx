"use client";
import React, { useState } from "react";
import SectionContainer from "../Layout/SectionContainer";

import { Logo } from "../Logo/Logo";

const Nav: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="h-[80px] bg-secondary flex w-full">
      <SectionContainer customClasses="flex justify-between items-center py-[10px]">
        <Logo />
        <div
          className={`burger-nav ${
            isNavOpen ? "open" : ""
          } bg-blue-200 h-[50px] w-[50px]`}
          onClick={toggleNav}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {/* Add your navigation menu items here */}
      </SectionContainer>
    </nav>
  );
};

export default Nav;
