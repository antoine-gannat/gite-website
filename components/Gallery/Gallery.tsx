import * as React from "react";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Gallery.module.css";
import { ILocalizationProps } from "@/utils/localization/localization";
import Image from "next/image";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "@/utils/css";

interface IGalleryItemProps {
  category: Category;
  onClick: () => void;
  selectedCategory: Category | undefined;
}

interface IDragData {
  startX: number;
  startY: number;
  lastX?: number;
  lastY?: number;
}

type Category = keyof typeof categories;

const categories = {
  bedroom: { imgCount: 8 },
  "dining-room": { imgCount: 5 },
  environment: { imgCount: 5 },
  kitchen: { imgCount: 5 },
  outdoor: { imgCount: 14 },
  pool: { imgCount: 8 },
} as const;

function getClickPosition(
  ev:
    | React.MouseEvent<HTMLImageElement, MouseEvent>
    | React.TouchEvent<HTMLImageElement>
) {
  if ("clientX" in ev) {
    return {
      clientX: ev.clientX,
      clientY: ev.clientY,
    };
  }
  // for touch events
  return {
    clientX: (ev as React.TouchEvent<HTMLImageElement>).touches?.[0]?.clientX,
    clientY: (ev as React.TouchEvent<HTMLImageElement>).touches?.[0]?.clientY,
  };
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
        width={300}
        height={175}
        alt={category}
        src={`/images/gallery-preview/${category}.jpg`}
      />
      <CarouselIcon />
    </Col>
  );
};

function Carousel({ category }: Pick<IGalleryItemProps, "category">) {
  const [activeImage, setActiveImage] = React.useState<number>(1);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const dragRef = React.useRef<IDragData>();

  // On category change, reset the state and refs
  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
      carouselRef.current.scrollTop = 0;
    }
    setActiveImage(1);
  }, [category]);

  const scrollTo = (index: number) => {
    if (
      index > categories[category].imgCount ||
      index < 1 ||
      !carouselRef.current
    ) {
      return;
    }

    const element = document.getElementById(
      `gallery-item-${index}`
    ) as HTMLImageElement;

    const isBackwards = index < activeImage;

    /**
     * Find the distance we need to scroll.
     *
     * 1. Get the image width
     * 2. Multiply it by the number of images we need to scroll
     * 3. Multiply it by -1 if we're scrolling backwards
     * 4. If scroll is caused by a drag, subtract the drag distance
     */
    const itemsToScroll = Math.abs(index - activeImage);
    const distance =
      (element.clientWidth * itemsToScroll -
        Math.abs(
          (dragRef.current?.startX ?? 0) - (dragRef.current?.lastX ?? 0)
        )) *
      // apply the direction
      (isBackwards ? -1 : 1);

    const steps = 30;
    const distancePerStep = distance / steps;
    const target = (index - 1) * element.clientWidth;
    let rounds = 1;

    /**
     * Scroll smoothly to the element.
     * This is a workaround for scrollIntoView, which doesn't work
     * well with touch events, so mainly for mobile devices.
     */
    const interval = setInterval(() => {
      if (!carouselRef.current) {
        return;
      }
      carouselRef.current.scrollLeft += distancePerStep;
      rounds++;
      if (rounds > steps) {
        clearInterval(interval);
        carouselRef.current.scrollLeft = target;
        return;
      }
    }, 300 / steps);

    setActiveImage(index);
  };

  const onMouseDown = (
    ev:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.TouchEvent<HTMLImageElement>
  ) => {
    const { clientX, clientY } = getClickPosition(ev);
    // save the initial click position
    dragRef.current = {
      startX: clientX,
      startY: clientY,
    };
  };

  const onMouseMove = (
    ev:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.TouchEvent<HTMLImageElement>
  ) => {
    // prevent default only for mouse events
    "clientX" in ev && ev.preventDefault();
    if (!dragRef.current || !carouselRef.current) {
      return;
    }
    const { startX, startY, lastX, lastY } = dragRef.current;
    const { clientX, clientY } = getClickPosition(ev);
    // calculate the delta between the last drag position and the current one
    // In case of first drag, use the initial click position
    const deltaX = (lastX ?? startX) - clientX;
    const deltaY = (lastY ?? startY) - clientY;
    // apply a scroll offset to the carousel
    carouselRef.current.scrollLeft += deltaX;
    carouselRef.current.scrollTop += deltaY;
    // save the current drag position
    dragRef.current.lastX = clientX;
    dragRef.current.lastY = clientY;
  };

  const onMouseUp = (
    ev:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.TouchEvent<HTMLImageElement>
  ) => {
    if (!dragRef.current) {
      return;
    }
    const { clientX } = getClickPosition(ev);
    const { currentTarget } = ev;
    const distanceTraveled =
      dragRef.current.startX - (clientX ?? dragRef.current.lastX);
    const imageWidth = currentTarget.width;
    // On end, if the cursor traveled at least 20% of the carousel width, snap to the next image
    if (Math.abs(distanceTraveled) > imageWidth * 0.2) {
      const index = distanceTraveled < 0 ? activeImage - 1 : activeImage + 1;
      scrollTo(index);
    } else {
      // otherwise, snap back to the current image
      scrollTo(activeImage);
    }
    dragRef.current = undefined;
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={css(styles.carouselNavBtn, styles.carouselNavBtnLeft)}
        // using data-disabled instead of disabled, because scrollIntoView doesn't work on disabled elements
        disabled={activeImage === 1}
        onClick={() => scrollTo(activeImage - 1)}
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
      </button>
      <div className={styles.carousel} ref={carouselRef}>
        {Array.from({ length: categories[category].imgCount }, (_, i) => (
          <div key={i} className={styles.carouselImageWrapper}>
            <Image
              draggable={false}
              onMouseDown={onMouseDown}
              onTouchStart={onMouseDown}
              onMouseMove={onMouseMove}
              onTouchMove={onMouseMove}
              onMouseUp={onMouseUp}
              onTouchEnd={onMouseUp}
              id={`gallery-item-${i + 1}`}
              className={styles.carouselImage}
              fill
              alt={category}
              src={`/images/${category}/picture_${i + 1}.jpg`}
            />
          </div>
        ))}
      </div>
      <button
        className={css(styles.carouselNavBtn, styles.carouselNavBtnRight)}
        onClick={() => scrollTo(activeImage + 1)}
        disabled={activeImage === categories[category].imgCount}
      >
        <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />
      </button>
      <div className={styles.carouselNav}>
        {Array.from({ length: categories[category].imgCount }, (_, i) => (
          <button
            key={i}
            className={css(
              styles.carouselNavPill,
              activeImage === i + 1 && styles.pillSelected
            )}
            onClick={() => scrollTo(i + 1)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default function Gallery({ strings }: ILocalizationProps): JSX.Element {
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
