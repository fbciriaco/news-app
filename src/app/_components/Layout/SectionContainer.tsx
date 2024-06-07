import React, { ReactNode } from "react";
import PageTitle from "../PageTitle/PageTitle";

interface SectionContainerProps {
  children: ReactNode;
  customClasses?: string;
  title?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  customClasses,
  title,
}) => {
  return (
    <div
      className={`max-w-[1440px] px-[1rem] md:px-[3rem] mx-auto w-full my-[60px] ${customClasses}`}
    >
      {title && <PageTitle customClasses="mb-8">{title}</PageTitle>}
      {children}
    </div>
  );
};

export default SectionContainer;
