import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

const serialize = (children) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (node.text === "") {
        text = <br />;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return (
          <h1 key={i} className="text-2xl font-bold">
            {serialize(node.children)}
          </h1>
        );
      // Iterate through all headings here...
      case "h6":
        return (
          <h6 key={i} className="text-xl font-bold">
            {serialize(node.children)}
          </h6>
        );
      case "blockquote":
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case "ul":
        return <ul key={i}>{serialize(node.children)}</ul>;
      case "ol":
        return <ol key={i}>{serialize(node.children)}</ol>;
      case "li":
        return <li key={i}>{serialize(node.children)}</li>;
      case "upload":
        return (
          <img src={`${process.env.NEXT_PUBLIC_API_BASE}${node?.value?.url}`} />
        );

      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i} className="mb-2">
            {serialize(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serialize(node.children)}</p>;
    }
  });

export default serialize;
