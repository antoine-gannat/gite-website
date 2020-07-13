import * as React from "react";
import "./Navbar.styles.css";
import { DefaultProps } from "../../types/props";
import { TranslateLanguage } from "../../types/translate";

export default function Navbar(props: DefaultProps): JSX.Element {
  function setLanguage(language: TranslateLanguage) {
    localStorage.setItem("translation-language", language);
    window.location.reload();
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav">
      <a className="navbar-brand" href="#home">
        Gîte Kerhéré
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#home">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#photos">
              Photos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#environment">
              Environment
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reservation">
              Réservation
            </a>
          </li>
          <li className="nav-item">
            <img
              role="button"
              onClick={() => setLanguage("FR")}
              className={
                "nav-link flag" + (props.language === "FR" ? " selected" : "")
              }
              src="/images/fr_flag.png"
              alt="France flag"
            />
          </li>
          <li className="nav-item">
            <img
              role="button"
              onClick={() => setLanguage("EN")}
              className={
                "nav-link flag" + (props.language === "EN" ? " selected" : "")
              }
              src="/images/uk_flag.png"
              alt="England flag"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
