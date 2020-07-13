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
          <hr />
          <p>{translate("presentationText")}</p>
          <div className="description-table">
            <ul className="col-12 row">
              <li className="col-6">
                <span>
                  {translate("capacity")} : 6 {translate("peoples")}
                </span>
              </li>
              <li className="col-6">
                <span>{translate("wifi")} </span>
              </li>
              <li className="col-6">
                <span>{translate("surface")} : 95m² </span>
              </li>
              <li className="col-6">
                <span>{translate("capacity")} : 6 </span>
              </li>
              <li className="col-6">
                <span>{translate("bedrooms")} : 3 </span>
              </li>
              <li className="col-6">
                <span>{translate("sheetsIncluded")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default translateComponent(PresentationCard, strings);
