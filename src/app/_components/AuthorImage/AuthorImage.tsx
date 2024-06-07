import React, { FC } from "react";
import "./AuthorImage.css";

interface AuthorImageProps {
  authorImage: string;
  author: string;
  size?: "sm" | "lg";
  customClasses?: string;
}

const AuthorImage: FC<AuthorImageProps> = ({
  authorImage,
  author,
  size = "sm",
  customClasses,
}) => {
  const sizes = {
    sm: "w-12 h-12",
    lg: "w-32 h-32",
  };
  return (
    <img
      src={authorImage}
      alt={author}
      className={`${sizes[size]} rounded-full object-cover object-center shadow-md ${customClasses}`}
    />
  );
};

export default AuthorImage;
