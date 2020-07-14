import { DefaultPropsWithTranslation } from "../../../types/props";
import * as React from "react";
import { translateComponent } from "../../Translation/Translator";
import "./SlideShow.styles.css";

type SlideShowProps = DefaultPropsWithTranslation & {
  imagesUrl?: string;
};

function SlideShow(props: SlideShowProps): JSX.Element {
  return (
    <div className="slideshow">
      <div className="darkener"></div>
    </div>
  );
}

export default translateComponent(SlideShow, []);
