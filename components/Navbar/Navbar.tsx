import * as React from "react";
import styles from "./Navbar.module.css";
import { ILocalizationProps } from "@/utils/localization";
import Link from "next/link";

export function Navbar({ strings, locale }: ILocalizationProps): JSX.Element {
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

  function createLinkBtn(name: string, title: string): JSX.Element {
    return (
      <li className="nav-item" key={name}>
        <button
          data-scrollto={name}
          className="nav-link"
          onClick={() => scrollTo(name)}
        >
          {title}
        </button>
      </li>
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
    <nav className={[styles.nav, "flex fixed top-0 left-0 w-full"].join(" ")}>
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
        <ul className="flex navbar-nav ml-auto mt-2 mt-lg-0">
          {links.map(({ name, title }) => createLinkBtn(name, title))}
          <li className="nav-item">
            <Link href="/fr" locale="fr" aria-label="Traduire en Français">
              <img
                className={[
                  "nav-link",
                  styles.flag,
                  locale === "fr" ? styles.selected : "",
                ].join(" ")}
                src="/images/flags/fr_flag.webp"
                alt={strings.FRFlagAlt}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/en" locale="en" aria-label="Translate to english">
              <img
                className={[
                  "nav-link",
                  styles.flag,
                  locale === "fr" ? styles.selected : "",
                ].join(" ")}
                src="/images/flags/uk_flag.webp"
                alt={strings.ENFlagAlt}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
