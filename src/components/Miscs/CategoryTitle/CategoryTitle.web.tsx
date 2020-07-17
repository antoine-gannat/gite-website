import * as React from "react";
import "./CategoryTitle.styles.css";

type CategoryTitleProps = {
  title: string;
};

export default function CategoryTitle({
  title,
}: CategoryTitleProps): JSX.Element {
  return (
    <div className="category-title">
      <h2>{title}</h2>
      <hr />
    </div>
  );
}
