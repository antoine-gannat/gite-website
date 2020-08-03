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
    hideExtendedNavbar();
  }

  function hideExtendedNavbar() {
    // Close the nav-tray if visible (small screens only)
    const navbarToggler = document.getElementById("navbar-toggler");
    if (
      navbarToggler &&
      navbarToggler.getAttribute("aria-expanded") === "true"
    ) {
      navbarToggler.click();
    }
  }

  function scrollTo(id: string): void {
    // Scroll to the location
    document.getElementById(id)?.scrollIntoView();
    window.location.hash = id;
    hideExtendedNavbar();
  }

  function createLinkBtn(linkName: string): JSX.Element {
    return (
      <li className="nav-item" key={linkName}>
        <button
          data-scrollto={linkName}
          className="nav-link"
          aria-label={`${translate("scrollTo")} ${translate(linkName)}`}
          onClick={() => scrollTo(linkName)}
        >
          {translate(linkName)}
        </button>
      </li>
    );
  }

  const links = ["home", "gallery", "booking", "directions"];

  return (
    <nav className="nav navbar fixed-top navbar-expand-lg navbar-dark nav">
      <a className="navbar-brand" href="#home">
        Gîte Kerhéré
      </a>
      <button
        className="navbar-toggler"
        id="navbar-toggler"
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
          {links.map((link) => createLinkBtn(link))}
          <li className="nav-item">
            <img
              tabIndex={0}
              role="button"
              aria-label="Traduire en Français"
              onClick={() => onFlagClick("FR")}
              className={
                "nav-link flag" + (language === "FR" ? " selected" : "")
              }
              src="/images/flags/fr_flag.webp"
              alt={translate("FRFlagAlt")}
            />
          </li>
          <li className="nav-item">
            <img
              tabIndex={0}
              role="button"
              aria-label="Translate to english"
              onClick={() => onFlagClick("EN")}
              className={
                "nav-link flag" + (language === "EN" ? " selected" : "")
              }
              src="/images/flags/uk_flag.webp"
              alt={translate("ENFlagAlt")}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default translateComponent(Navbar, strings);
