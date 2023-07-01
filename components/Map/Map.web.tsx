import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle.web";
import styles from "./Map.module.css";
import { ILocalizationProps } from "@/utils/localization";

export default function Map({ strings }: ILocalizationProps): JSX.Element {
  return (
    <section className={styles.mapContainer} id="directions">
      <CategoryTitle title={strings.directions} />
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.4819459257537!2d-4.025835684350243!3d48.15879197922521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48112fef6730783f%3A0x472160ddc66f7d07!2sGite%20de%20Kerh%C3%A9r%C3%A9%20avec%20piscine%20int%C3%A9rieure%20sauna%20baln%C3%A9o%20location%20saisonni%C3%A8re%20Finist%C3%A8re%20Bretagne!5e0!3m2!1sen!2sfr!4v1595003012002!5m2!1sen!2sfr"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}
        title={strings.directions}
      ></iframe>
    </section>
  );
}
