import "./PresentationCard.styles.css";

import * as React from "react";

import { DefaultProps } from "../../types/props";
import WebP from "../Miscs/WebP";
import strings from "./PresentationCard.string.json";
import { useLocalization } from "../../hooks/useLocalization";

export default function PresentationCard({
  webpAvailable,
}: DefaultProps): JSX.Element {
  const localizer = useLocalization(strings);
  return (
    <div className="presentation-card-container col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1">
      <div className="row col-12">
        <img
          src={WebP("/images/gallery-preview/pool.jpg", webpAvailable)}
          className="col-lg-6 col-md-6 col-sm-6"
          alt={localizer("poolAlt")}
        />
        <div className="col-lg-6 col-md-6 col-sm-6 presentation-card">
          <h3>{localizer("presentationTitle")}</h3>
          <hr />
          <p>{localizer("presentationText")}</p>
          <div className="description-table">
            <ul className="col-12 row">
              <li className="col-6">
                <span>
                  {localizer("capacity")} : 6 {localizer("peoples")}
                </span>
              </li>
              <li className="col-6">
                <span>{localizer("wifi")} </span>
              </li>
              <li className="col-6">
                <span>{localizer("surface")} : 95m² </span>
              </li>
              <li className="col-6">
                <span>{localizer("bedrooms")} : 3 </span>
              </li>
              <li className="col-6">
                <a
                  href="https://www.facebook.com/gitepiscineinterieurebretagne"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={localizer("gotoFb")}
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>{" "}
              </li>
              <li className="col-6">
                <a
                  href="https://www.instagram.com/gitepiscine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={localizer("gotoInsta")}
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
              title={localizer("gotoGdf")}
            >
              <img
                src={WebP("/images/4-epis-gdf.png", webpAvailable)}
                alt={localizer("gite4epis")}
              />
            </a>
            <img
              className="col meuble-tourisme-img"
              src={WebP("/images/meuble-de-tourisme.jpg", webpAvailable)}
              alt={localizer("gite4epis")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
