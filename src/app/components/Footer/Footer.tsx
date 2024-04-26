import React from "react";
import SectionContainer from "../Layout/SectionContainer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-main py-[20px]">
      <SectionContainer>
        <p>NB {new Date().getFullYear()}</p>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
