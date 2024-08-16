"use client";
import React, { FC } from "react";
import "./ImageOnError.css";

interface ImageOnErrorProps {
  imageUrl: string;
  className?: string;
}

const ImageOnError: FC<ImageOnErrorProps> = ({ imageUrl, className }) => (
  <img
    className={className}
    data-testid="ImageOnError"
    onErrorCapture={(e) => {
      e.currentTarget.onerror = null; // prevents looping
      e.currentTarget.src = "https://picsum.photos/500/400";
    }}
    src={imageUrl}
  />
);

export default ImageOnError;
