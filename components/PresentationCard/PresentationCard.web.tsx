import * as React from "react";

import styles from "./PresentationCard.module.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { ILocalizationProps } from "@/utils/localization";

export default function PresentationCard({
  strings,
}: ILocalizationProps): JSX.Element {
  return (
    <Container className={styles.card}>
      <h3 className="pt-4 text-center">{strings.presentationTitle}</h3>
      <hr />
      <img className={styles.image} src="/images/gallery-preview/pool.jpg" />
      <p className={styles.cardText}>{strings.presentationText}</p>
      <Row>
        <Col className={styles.awardWrapper}>
          <img
            className={styles.award}
            src="/images/4-epis-gdf.png"
            alt={strings.giteEpis}
          />
        </Col>
        <Col className={styles.awardWrapper}>
          <img
            className={styles.award}
            src="/images/meuble-de-tourisme.jpg"
            alt={strings.giteEpis}
          />
        </Col>
      </Row>
    </Container>
  );
}
