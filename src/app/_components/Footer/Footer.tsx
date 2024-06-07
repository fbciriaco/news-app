import React from "react";
import SectionContainer from "../Layout/SectionContainer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-main py-[20px] text-textColorSecondary">
      <SectionContainer customClasses="!my-0">
        <p>NB {new Date().getFullYear()}</p>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
