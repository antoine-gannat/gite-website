import * as React from "react";
import "./PresentationCard.styles.css";
import strings from "./PresentationCard.string.json";
import { translateComponent } from "../Translation/Translator";
import { DefaultPropsWithTranslation } from "../../types/props";

function PresentationCard({
  translate,
}: DefaultPropsWithTranslation): JSX.Element {
  return (
    <div className="presentation-card-container col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1">
      <div className="row col-12">
        <img
          src="/images/gallery-preview/pool.jpg"
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
                <a
                  href="https://www.facebook.com/gitepiscineinterieurebretagne"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={translate("gotoFb")}
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>{" "}
              </li>
              <li className="col-6">
                <a
                  href="https://www.instagram.com/gitepiscine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={translate("gotoInsta")}
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="row">
            <a
              href="https://www.gites-de-france.com/fr"
              target="_blank"
              rel="noopener noreferrer"
              className="gdf-link col"
              title={translate("gotoGdf")}
            >
              <img src="/images/4-epis-gdf.jpg" alt={translate("gite4epis")} />
            </a>
            <img
              className="col"
              src="/images/meuble-de-tourisme.jpg"
              alt={translate("gite4epis")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default translateComponent(PresentationCard, strings);
