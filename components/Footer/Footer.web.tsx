import * as React from "react";

import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import styles from "./Footer.module.css";
import { ILocalizationProps } from "@/utils/localization";
import { css } from "@/utils/css";

export default function Footer({ strings }: ILocalizationProps): JSX.Element {
  return (
    <footer className={styles.footer} id="contact">
      <CategoryTitle title={strings.contactInfo} />
      <ul className={css(styles.ul, "row col-12")}>
        <li className="col-lg-6 col-md-6 col-sm-12">
          Jean Claude & Françoise GANNAT
        </li>
        <li className="col-lg-6 col-md-6 col-sm-12">
          <a href="tel:+33 06 65 18 21 97" title={strings.clickToCall}>
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
            title={strings.gotoFb}
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </li>
        <li className="col-6">
          <a
            href="https://www.instagram.com/gitepiscine/"
            target="_blank"
            rel="noopener noreferrer"
            title={strings.gotoInsta}
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>© 2021, Antoine GANNAT</p>
    </footer>
  );
}
