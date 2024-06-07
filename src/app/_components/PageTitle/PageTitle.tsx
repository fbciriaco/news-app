import React, { FC } from "react";
import "./PageTitle.css";

interface PageTitleProps {
  children: string;
  customClasses?: string;
}

const PageTitle: FC<PageTitleProps> = ({ children, customClasses }) => (
  <h1
    className={`PageTitle text-[40px] ${customClasses}`}
    data-testid="PageTitle"
  >
    {children}
  </h1>
);

export default PageTitle;
