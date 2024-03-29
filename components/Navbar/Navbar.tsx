import styles from "./Navbar.module.css";
import { IComponentBaseProps } from "../types";
import Link from "next/link";

import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { css } from "@/utils/css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { scrollTo } from "@/utils/scrollTo";

export default function TopNav({
  data: { siteName },
  strings,
  locale,
}: IComponentBaseProps): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  function createLinkBtn(name: string, title: string): JSX.Element {
    return (
      <Nav.Link onClick={() => (setExpanded(false), scrollTo(name))} key={name}>
        <p className={styles.link}>{title}</p>
      </Nav.Link>
    );
  }

  const links = [
    { name: "home", title: strings.homeLink },
    { name: "gallery", title: strings.galleryLink },
    { name: "booking", title: strings.bookingLink },
    { name: "reviews", title: strings.reviewsLink },
    { name: "directions", title: strings.directionsLink },
  ];

  return (
    <Navbar className={styles.nav} fixed="top">
      <Container fluid>
        <Navbar.Brand
          onClick={() => scrollTo("home")}
          className="hover:cursor-pointer"
        >
          <p className={styles.link}>{strings.siteName}</p>
        </Navbar.Brand>
        <div className="flex flex-row">
          <div className={css(styles.navItems, expanded && styles.expanded)}>
            {links.map(({ name, title }) => createLinkBtn(name, title))}
          </div>
          <div className={styles.flagWrapper}>
            <Link
              href={`/fr/${siteName}`}
              locale="fr"
              aria-label="Traduire en Français"
            >
              <Image
                className={css(styles.flag, locale === "fr" && "opacity-100")}
                src="/images/flags/fr_flag.webp"
                alt={strings.FRFlagAlt}
                height={40}
                width={40}
              />
            </Link>
          </div>
          <div className={styles.flagWrapper}>
            <Link
              href={`/en/${siteName}`}
              locale="en"
              aria-label="Translate to english"
            >
              <Image
                className={css(styles.flag, locale === "en" && "opacity-100")}
                src="/images/flags/uk_flag.webp"
                alt={strings.ENFlagAlt}
                height={40}
                width={40}
              />
            </Link>
          </div>
          <button
            className={styles.toggler}
            aria-label={strings.toggleNav}
            onClick={() => setExpanded(!expanded)}
          >
            <FontAwesomeIcon icon={faAlignJustify} />
          </button>
        </div>
      </Container>
    </Navbar>
  );
}
