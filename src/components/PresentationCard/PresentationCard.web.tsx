import * as React from "react";
import "./PresentationCard.styles.css";
import strings from "./PresentationCard.string.json";
import globalStrings from "../../index.strings.json";
import { translateComponent } from "../Translation/Translator";
import { DefaultPropsWithTranslation } from "../../types/props";

function PresentationCard({
  translate,
}: DefaultPropsWithTranslation): JSX.Element {
  return (
    <section className="presentation-card-container col-lg-8 col-md-8 col-sm-12 offset-lg-2 offset-md-2">
      <div className="row col-12">
        <img
          src="/images/pool/picture_1.jpg"
          className="col-lg-6 col-md-6 col-sm-6"
          alt={translate("poolAlt")}
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

export default translateComponent(PresentationCard, [strings, globalStrings]);
