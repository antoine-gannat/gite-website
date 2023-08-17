import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Gallery.module.css";
import { IComponentBaseProps } from "../types";
import Image from "next/image";
import { css } from "@/utils/css";
import { Carousel } from "./Carousel";
import { Category, categories } from "../constants";

interface IGalleryItemProps {
  category: Category;
  onClick: () => void;
  selectedCategory: Category | undefined;
}

const CarouselIcon = () => (
  <svg
    aria-label="Carousel"
    color="rgb(255, 255, 255)"
    fill="rgb(255, 255, 255)"
    height="22"
    role="img"
    viewBox="0 0 48 48"
    width="22"
    className={styles.carouselIcon}
  >
    <title>Carousel</title>
    <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
  </svg>
);

const GalleryItem = ({
  category,
  onClick,
  selectedCategory,
}: IGalleryItemProps) => {
  const isSelected = selectedCategory === category;

  return (
    <Col
      lg={4}
      md={6}
      sm={6}
      xs={6}
      className={css(
        styles.galleryItem,
        isSelected && styles.galleryItemSelected
      )}
      onClick={onClick}
    >
      <Image
        priority={true}
        width={300}
        height={175}
        alt={category}
        src={`/images/gallery-preview/${category}.jpg`}
      />
      <CarouselIcon />
    </Col>
  );
};

export default function Gallery({ strings }: IComponentBaseProps): JSX.Element {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>();

  return (
    <section id="gallery">
      <Container className={styles.section}>
        <CategoryTitle title={strings.gallery} />
        <p className={styles.helper}>{strings.clickForMore}</p>
        {selectedCategory && <Carousel category={selectedCategory} />}
        <Row>
          {Object.keys(categories).map((category, index) => (
            <GalleryItem
              key={index}
              category={category as Category}
              onClick={() =>
                category === selectedCategory
                  ? setSelectedCategory(undefined)
                  : setSelectedCategory(category as Category)
              }
              selectedCategory={selectedCategory}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}
