import { DefaultPropsWithTranslation } from "../../types/props";
import strings from "./Galery.strings.json";
import * as React from "react";
import { translateComponent } from "../Translation/Translator";

function Galery(props: DefaultPropsWithTranslation): JSX.Element {
  return (
    <section id="galery">
      <div className="galery">
        <img className="vertical-img" src="/images/piscine/picture_1.jpg" />
      </div>
    </section>
  );
}

export default translateComponent(Galery, strings);
