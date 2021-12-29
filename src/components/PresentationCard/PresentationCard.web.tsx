import * as React from "react";

import { DefaultProps } from "../../types/props";
import WebP from "../Miscs/WebP";
import strings from "./PresentationCard.string.json";
import { useLocalization } from "../../hooks/useLocalization";
import { useStyles } from "./PresentationCard.styles";
import Container from "react-bootstrap/Container";
import { Col, Row, Table } from "react-bootstrap";

export default function PresentationCard({
  webpAvailable,
}: DefaultProps): JSX.Element {
  const styles = useStyles();
  const localizer = useLocalization(strings);
  return (
    <Container className={styles.card}>
      <h3 className={styles.cardTitle}>{localizer("presentationTitle")}</h3>
      <hr />
      <p className={styles.cardText}>{localizer("presentationText")}</p>
      <Row>
        <Col className={styles.awardWrapper}>
          <img
            className={styles.award}
            src={WebP("/images/4-epis-gdf.png", webpAvailable)}
            alt={localizer("gite4epis")}
          />
        </Col>
        <Col className={styles.awardWrapper}>
          <img
            className={styles.award}
            src={WebP("/images/meuble-de-tourisme.jpg", webpAvailable)}
            alt={localizer("gite4epis")}
          />
        </Col>
      </Row>
    </Container>
  );
}
