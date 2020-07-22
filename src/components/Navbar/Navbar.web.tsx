import * as React from "react";
import "./Navbar.styles.css";
import { DefaultPropsWithTranslation } from "../../types/props";
import { TranslateLanguage } from "../../types/translate";
import { translateComponent } from "../Translation/Translator";
import strings from "./Navbar.strings.json";

function Navbar({
  translate,
  language,
  setLanguage,
}: DefaultPropsWithTranslation): JSX.Element {
  function onFlagClick(language: TranslateLanguage) {
    localStorage.setItem("translation-language", language);
    setLanguage(language);
  }

  function scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView();
    window.location.hash = id;
  }
  return (
    <nav className="nav navbar fixed-top navbar-expand-lg navbar-dark nav">
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
          <li className={"nav-item"}>
            <button
              data-scrollto="home"
              className="nav-link"
              onClick={() => scrollTo("home")}
            >
              {translate("home")}
            </button>
          </li>
          <li className={"nav-item"}>
            <button
              data-scrollto="gallery"
              className="nav-link"
              onClick={() => scrollTo("gallery")}
            >
              {translate("gallery")}
            </button>
          </li>
          <li className={"nav-item"}>
            <button
              data-scrollto="booking"
              className="nav-link"
              onClick={() => scrollTo("booking")}
            >
              {translate("booking")}
            </button>
          </li>
          <li className={"nav-item"}>
            <button
              data-scrollto="directions"
              className="nav-link"
              onClick={() => scrollTo("directions")}
            >
              {translate("directions")}
            </button>
          </li>
          <li className={"nav-item"}>
            <button
              data-scrollto="contact"
              className="nav-link"
              onClick={() => scrollTo("contact")}
            >
              {translate("contact_info")}
            </button>
          </li>
          <li className="nav-item">
            <img
              role="button"
              onClick={() => onFlagClick("FR")}
              className={
                "nav-link flag" + (language === "FR" ? " selected" : "")
              }
              src="/images/flags/fr_flag.png"
              alt={translate("FRFlagAlt")}
            />
          </li>
          <li className="nav-item">
            <img
              role="button"
              onClick={() => onFlagClick("EN")}
              className={
                "nav-link flag" + (language === "EN" ? " selected" : "")
              }
              src="/images/flags/uk_flag.png"
              alt={translate("ENFlagAlt")}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default translateComponent(Navbar, strings);
