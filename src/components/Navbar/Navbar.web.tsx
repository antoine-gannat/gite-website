import "./Navbar.styles.css";

import * as React from "react";

import Nav from "react-bootstrap/Navbar";
import { DefaultProps } from "../../types/props";
import { TranslateLanguage } from "../../types/translation";
import strings from "./Navbar.strings.json";
import { useLocale, useLocalization } from "../../hooks/useLocalization";

export default function Navbar({ setLocale }: DefaultProps): JSX.Element {
  const locale = useLocale();
  const localizer = useLocalization(strings);
  function onFlagClick(language: TranslateLanguage) {
    localStorage.setItem("translation-language", language);
    setLocale(language);
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
          aria-label={`${localizer("scrollTo")} ${localizer(linkName)}`}
          onClick={() => scrollTo(linkName)}
        >
          {localizer(linkName)}
        </button>
      </li>
    );
  }

  const links = ["home", "gallery", "booking", "reviews", "directions"];

  return (
    <Nav expand="lg" bg="dark" className="nav fixed-top">
      <a className="navbar-brand" href="#home" tabIndex={-1}>
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
              className={"nav-link flag" + (locale === "FR" ? " selected" : "")}
              src="/images/flags/fr_flag.webp"
              alt={localizer("FRFlagAlt")}
            />
          </li>
          <li className="nav-item">
            <img
              tabIndex={0}
              role="button"
              aria-label="Translate to english"
              onClick={() => onFlagClick("EN")}
              className={"nav-link flag" + (locale === "EN" ? " selected" : "")}
              src="/images/flags/uk_flag.webp"
              alt={localizer("ENFlagAlt")}
            />
          </li>
        </ul>
      </div>
    </Nav>
  );
}
