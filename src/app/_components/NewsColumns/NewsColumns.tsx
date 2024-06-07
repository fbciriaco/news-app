import React, { FC } from "react";
import "./NewsColumns.css";

interface NewsColumnsProps {
  children: React.ReactNode;
}

const NewsColumns: FC<NewsColumnsProps> = ({ children }) => (
  <section className="NewsColumns news" data-testid="NewsColumns">
    {children}
  </section>
);

export default NewsColumns;
