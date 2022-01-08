import * as React from "react";

import { useLocalization } from "../../hooks/useLocalization";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import strings from "./Gallery.strings.json";
import { Col, Container, Row } from "react-bootstrap";
import { useStyles } from "./Gallery.styles";
import { Slideshow } from "../Slideshow/Slideshow.web";

export default function Gallery(): JSX.Element {
  const localizer = useLocalization(strings);
  const styles = useStyles();
  const [slideshow, setSlideshow] = React.useState<null | string>(null);

  const GalleryItem = (name: string) => (
    <Col
      lg={4}
      md={6}
      sm={6}
      xs={6}
      className={styles.galleryItem}
      onClick={() => setSlideshow(name)}
      key={`gallery-${name}`}
    >
      <img src={`/images/gallery-preview/${name}.jpg`} />
    </Col>
  );
  const categories = [
    "pool",
    "bedroom",
    "kitchen",
    "dining-room",
    "outdoor",
    "environment",
  ];
  return (
    <section id="gallery">
      <Container>
        <CategoryTitle title={localizer("gallery")} />
        <p className={styles.helper}>{localizer("clickForMore")}</p>
        <Row>{categories.map(GalleryItem)}</Row>
      </Container>
      {slideshow && (
        <Slideshow
          onLeave={() => setSlideshow(null)}
          imageCategory={slideshow}
          categories={categories}
        />
      )}
    </section>
  );
}
