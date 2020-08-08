import * as React from "react";
import "./Footer.styles.css";
import { DefaultPropsWithTranslation } from "../../types/props";
import { translateComponent } from "../Translation/Translator";
import strings from "./Footer.strings.json";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";

function Footer({ translate }: DefaultPropsWithTranslation): JSX.Element {
  return (
    <footer className="footer" id="contact">
      <CategoryTitle title={translate("contact_info")} />
      <ul className="row col-12">
        <li className="col-lg-6 col-md-6 col-sm-12">
          Jean Claude & Françoise GANNAT
        </li>
        <li className="col-lg-6 col-md-6 col-sm-12">
          <a href="tel:+33 06 65 18 21 97" title={translate("click_to_call")}>
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
      </ul>
      <p>© 2020, Antoine GANNAT</p>
    </footer>
  );
}

export default translateComponent(Footer, strings);
