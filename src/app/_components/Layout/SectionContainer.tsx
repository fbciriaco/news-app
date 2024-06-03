import React, { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  customClasses?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  customClasses,
}) => {
  return (
    <div
      className={`max-w-[1440px] px-[1rem] md:px-[3rem] mx-auto w-full my-[60px] ${customClasses}`}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
