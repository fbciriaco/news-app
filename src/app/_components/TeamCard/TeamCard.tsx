import React, { FC } from "react";
import "./TeamCard.css";
import AuthorImage from "../AuthorImage/AuthorImage";
import Paragraph from "../Paragraph/Paragraph";

interface TeamCardProps {
  authorImage: string;
  author: string;
  role: string;
  email: string;
  phone: string;
}

const TeamCard: FC<TeamCardProps> = ({
  authorImage,
  author,
  role,
  email,
  phone,
}) => (
  <div
    className="TeamCard flex flex-col justify-center items-center"
    data-testid="TeamCard"
  >
    <AuthorImage
      authorImage={authorImage}
      author={author}
      size={"lg"}
      customClasses="mb-4"
    />
    <h3 className="font-bold text-lg mb-2">{author}</h3>
    <Paragraph>{role}</Paragraph>
    <Paragraph>{email}</Paragraph>
    <Paragraph>{phone}</Paragraph>
  </div>
);

export default TeamCard;
