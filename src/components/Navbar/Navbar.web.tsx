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

const links = ["home", "gallery", "booking", "reviews", "directions"];

function scrollTo(id: string): void {
  // Scroll to the location
  document.getElementById(id)?.scrollIntoView();
  window.location.hash = id;
}

export default function TopNav({ setLocale }: DefaultProps): JSX.Element {
  const locale = useLocale();
  const styles = useStyles();
  const localizer = useLocalization(strings);

  const [expanded, setExpanded] = React.useState(false);
  function onFlagClick(language: TranslateLanguage) {
    localStorage.setItem("translation-language", language);
    setLocale(language);
    setExpanded(false);
  }

  function createLinkBtn(linkName: string): JSX.Element {
    return (
      <Nav.Link
        aria-label={`${localizer("scrollTo")} ${localizer(linkName)}`}
        onClick={() => (setExpanded(false), scrollTo(linkName))}
        data-scrollto={linkName}
        key={linkName}
      >
        <p className={styles.link}>{localizer(linkName)}</p>
      </Nav.Link>
    );
  }

  return (
    <Navbar className={styles.nav} fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <p className={styles.link}>Gîte Kerhéré</p>
        </Navbar.Brand>
        <div className={styles.linkWrapper}>
          <div className={css(styles.navItems, expanded && styles.expanded)}>
            {links.map((link) => createLinkBtn(link))}
          </div>
          <img
            tabIndex={0}
            role="button"
            aria-label="Traduire en Français"
            onClick={() => onFlagClick("FR")}
            className={css(styles.flag, locale === "FR" && styles.selected)}
            src="/images/flags/fr_flag.webp"
            alt={localizer("FRFlagAlt")}
          />
          <img
            tabIndex={0}
            role="button"
            aria-label="Translate to english"
            onClick={() => onFlagClick("EN")}
            className={css(styles.flag, locale === "EN" && styles.selected)}
            src="/images/flags/uk_flag.webp"
            alt={localizer("ENFlagAlt")}
          />
          <button
            className={styles.toggler}
            onClick={() => setExpanded(!expanded)}
          >
            <i className="fas fa-align-justify"></i>
          </button>
        </div>
      </Container>
    </Navbar>
  );
}
