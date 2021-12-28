import "./CategoryTitle.styles.css";

import * as React from "react";

type CategoryTitleProps = {
  title: string;
  style?: any;
  subTitle?: JSX.Element;
};

export default function CategoryTitle({
  title,
  style,
  subTitle,
}: CategoryTitleProps): JSX.Element {
  return (
    <div className="category-title" style={style}>
      <h2>{title}</h2>
      {subTitle}
      <hr />
    </div>
  );
}
