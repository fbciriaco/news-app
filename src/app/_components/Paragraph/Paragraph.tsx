import React, { FC } from "react";
import "./Paragraph.css";

interface ParagraphProps {
  children: string | React.ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => (
  <p className="Paragraph text-black" data-testid="Paragraph">
    {children}
  </p>
);

export default Paragraph;
