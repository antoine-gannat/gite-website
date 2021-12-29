import "./CategoryTitle.styles.ts";

import * as React from "react";
import { useStyles } from "./CategoryTitle.styles";

type CategoryTitleProps = {
  title: string;
  subTitle?: JSX.Element;
};

export default function CategoryTitle({
  title,
  subTitle,
}: CategoryTitleProps): JSX.Element {
  const styles = useStyles();
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      {subTitle}
      <hr className={styles.separation} />
    </div>
  );
}
