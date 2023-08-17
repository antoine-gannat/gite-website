import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import styles from "./Map.module.css";
import { IComponentBaseProps } from "../types";

export default function Map({
  strings,
  data,
}: IComponentBaseProps): JSX.Element {
  return (
    <section className={styles.mapContainer} id="directions">
      <CategoryTitle title={strings.directions} />
      <iframe
        className={styles.map}
        src={data.googleMapUrl}
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
