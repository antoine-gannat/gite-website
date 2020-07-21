import * as React from "react";
import "./CategoryTitle.styles.css";

type CategoryTitleProps = {
  title: string;
  style?: any;
};

export default function CategoryTitle({
  title,
  style,
}: CategoryTitleProps): JSX.Element {
  return (
    <div className="category-title" style={style}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
}
