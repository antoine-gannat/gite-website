import * as React from "react";
import "./PresentationCard.styles.css";
import strings from "./PresentationCard.string.json";
import { translateComponent } from "../Translation/Translator";
import { DefaultPropsWithTranslation } from "../../types/props";

function PresentationCard({
  translate,
}: DefaultPropsWithTranslation): JSX.Element {
  return (
    <section className="presentation-card-container">
      <div className="row col-12">
        <img
          src="/images/piscine/picture_1.jpg"
          className="col-lg-6 col-md-6 col-sm-6"
          alt={translate("poolImgAlt")}
        />
        <div className="col-lg-6 col-md-6 col-sm-6 presentation-card">
          <h3>{translate("presentationTitle")}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            voluptatum? Laborum animi nesciunt alias ducimus corporis quos vero
            ratione fuga beatae exercit ationem magnam, porro illum in aliquid
            odit maiores nulla?
          </p>
        </div>
      </div>
    </section>
  );
}

export default translateComponent(PresentationCard, strings);
