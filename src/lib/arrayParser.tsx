import React from "react";
import { Link } from "lucide-react";

export const parseArrayToHTML = (data) => {
  return data?.map((item, index) => {
    const { type, align, children } = item;
    const style = { textAlign: align };

    switch (type) {
      case "p":
        return (
          <p key={index} style={style}>
            {children.map((child, childIndex) => {
              if (child.type == "a") {
                return (
                  <a
                    href={child.url}
                    target="_blank"
                    className="text-primary flex items-center gap-2"
                  >
                    <Link className="size-4" /> {child.children[0].text}
                  </a>
                );
              }

              return (
                <span
                  key={childIndex}
                  className={`${child.bold && "font-bold"} ${ child.italic && "italic" } ${child.underline &&
                  "underline"}`}
                >
                  {child.text == "\n" || child.text == "" ? <br /> : child.text}
                </span>
              );
            })}
          </p>
        );
      default:
        return null;
    }
  });
};

export const parseArrayToString = (data) => {
  return data
    .map((item) => {
      return item.children.map((child) => child.text).join("");
    })
    .join("\n");
};
