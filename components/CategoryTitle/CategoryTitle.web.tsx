import * as React from "react";
import styles from "./CategoryTitle.module.css";

type CategoryTitleProps = {
  title: string;
  subTitle?: JSX.Element;
};

export default function CategoryTitle({
  title,
  subTitle,
}: CategoryTitleProps): JSX.Element {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      {subTitle}
      <hr className={styles.separation} />
    </div>
  );
}
