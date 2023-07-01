import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle.web";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Gallery.module.css";
import { Slideshow } from "../Slideshow/Slideshow.web";
import { ILocalizationProps } from "@/utils/localization";
import Image from "next/image";

export default function Gallery({ strings }: ILocalizationProps): JSX.Element {
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
      <Image
        width={500}
        height={333}
        alt={name}
        src={`/images/gallery-preview/${name}.jpg`}
      />
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
        <CategoryTitle title={strings.gallery} />
        <p className={styles.helper}>{strings.clickForMore}</p>
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
