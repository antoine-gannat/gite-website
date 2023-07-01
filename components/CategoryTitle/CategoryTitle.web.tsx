import * as React from "react";

type CategoryTitleProps = {
  title: string;
  subTitle?: JSX.Element;
};

export default function CategoryTitle({
  title,
  subTitle,
}: CategoryTitleProps): JSX.Element {
  return (
    <div className="text-center mt-5">
      <h2 className="text-3xl">{title}</h2>
      {subTitle}
      <hr className="w-full border-2 p-2" />
    </div>
  );
}
