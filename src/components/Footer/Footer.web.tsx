import * as React from "react";

import { useLocalization } from "../../hooks/useLocalization";
import { css } from "../../utils";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import strings from "./Footer.strings.json";
import { useStyles } from "./Footer.styles";

export default function Footer(): JSX.Element {
  const localizer = useLocalization(strings);
  const styles = useStyles();

  return (
    <footer className={styles.footer} id="contact">
      <CategoryTitle title={localizer("contact_info")} />
      <ul className={css(styles.ul, "row col-12")}>
        <li className="col-lg-6 col-md-6 col-sm-12">
          Jean Claude & Françoise GANNAT
        </li>
        <li className="col-lg-6 col-md-6 col-sm-12">
          <a href="tel:+33 06 65 18 21 97" title={localizer("click_to_call")}>
            +33 06 65 18 21 97
          </a>
        </li>
        <li className="col-lg-6 col-md-6 col-sm-12">
          <a href="mailto:jeanclaude.gannat@hotmail.fr">
            jeanclaude.gannat@hotmail.fr
          </a>
        </li>
        <li className="col-lg-6 col-md-6 col-sm-12">
          <a
            href="https://g.page/gitepiscineinterieurefinistere?share"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kerhéré, 29510 BRIEC, FRANCE
          </a>
        </li>
        <li className="col-6">
          <a
            href="https://www.facebook.com/gitepiscineinterieurebretagne"
            target="_blank"
            rel="noopener noreferrer"
            title={localizer("gotoFb")}
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </li>
        <li className="col-6">
          <a
            href="https://www.instagram.com/gitepiscine/"
            target="_blank"
            rel="noopener noreferrer"
            title={localizer("gotoInsta")}
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>© 2021, Antoine GANNAT</p>
    </footer>
  );
}
