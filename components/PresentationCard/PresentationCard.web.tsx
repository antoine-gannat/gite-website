import * as React from "react";

import styles from "./PresentationCard.module.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { ILocalizationProps } from "@/utils/localization";
import Image from "next/image";

export default function PresentationCard({
  strings,
}: ILocalizationProps): JSX.Element {
  return (
    <Container className={styles.card}>
      <h3 className="pt-4 text-center">{strings.presentationTitle}</h3>
      <hr />
      <Image
        alt={strings.pool}
        className={styles.image}
        src="/images/gallery-preview/pool.jpg"
        width={600}
        height={400}
      />
      <p className={styles.cardText}>{strings.presentationText}</p>
      <Row>
        <Col className={styles.awardWrapper}>
          <Image
            className={styles.award}
            src="/images/4-epis-gdf.png"
            alt={strings.giteEpis}
            width={150}
            height={68}
          />
        </Col>
        <Col className={styles.awardWrapper}>
          <Image
            className={styles.award}
            src="/images/meuble-de-tourisme.jpg"
            alt={strings.giteEpis}
            width={150}
            height={150}
          />
        </Col>
      </Row>
    </Container>
  );
}
