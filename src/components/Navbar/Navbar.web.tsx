import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useLocale, useLocalization } from "../../hooks/useLocalization";
import { DefaultProps } from "../../types/props";
import { TranslateLanguage } from "../../types/translation";
import { css } from "../../utils";
import strings from "./Navbar.strings.json";
import { useStyles } from "./Navbar.styles";

export default function TopNav({ setLocale }: DefaultProps): JSX.Element {
  const locale = useLocale();
  const styles = useStyles();
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
      <Nav.Link
        aria-label={`${localizer("scrollTo")} ${localizer(linkName)}`}
        onClick={() => scrollTo(linkName)}
        data-scrollto={linkName}
        key={linkName}
      >
        <p className={styles.link}>{localizer(linkName)}</p>
      </Nav.Link>
    );
  }

  const links = ["home", "gallery", "booking", "reviews", "directions"];

  return (
    <Navbar expand="lg" className={styles.nav} fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <p className={styles.link}>Gîte Kerhéré</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={styles.linkWrapper}>
            {links.map((link) => createLinkBtn(link))}
            <Nav.Link>
              <img
                tabIndex={0}
                role="button"
                aria-label="Traduire en Français"
                onClick={() => onFlagClick("FR")}
                className={css(styles.flag, locale === "FR" && styles.selected)}
                src="/images/flags/fr_flag.webp"
                alt={localizer("FRFlagAlt")}
              />
            </Nav.Link>
            <Nav.Link>
              <img
                tabIndex={0}
                role="button"
                aria-label="Translate to english"
                onClick={() => onFlagClick("EN")}
                className={css(styles.flag, locale === "EN" && styles.selected)}
                src="/images/flags/uk_flag.webp"
                alt={localizer("ENFlagAlt")}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
