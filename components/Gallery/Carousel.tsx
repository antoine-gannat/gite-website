import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Category, carouselPlaceholderBlur, categories } from "../constants";
import { css } from "@/utils/css";
import styles from "./Carousel.module.css";
import Image from "next/image";

interface IDragData {
  startX: number;
  lastX?: number;
}

interface ICarouselProps {
  category: Category;
}

function getClickPosition(
  ev:
    | React.MouseEvent<HTMLImageElement, MouseEvent>
    | React.TouchEvent<HTMLImageElement>
) {
  if ("clientX" in ev) {
    return {
      clientX: ev.clientX,
    };
  }
  // for touch events
  return {
    clientX: (ev as React.TouchEvent<HTMLImageElement>).touches?.[0]?.clientX,
  };
}

export function Carousel({ category }: ICarouselProps) {
  const [activeImage, setActiveImage] = React.useState<number>(1);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const dragRef = React.useRef<IDragData>();

  // Reset the state and refs
  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
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

    /**
     * Find the distance we need to scroll.
     *
     * 1. Get the image width
     * 2. Multiply it by the number of images we need to scroll
     * 3. Multiply it by -1 if we're scrolling backwards
     * 4. If scroll is caused by a drag, subtract the drag distance
     */
    const itemsToScroll = Math.abs(index - activeImage);
    // Calculate how much the user has dragged (if any)
    const currentDragDistance =
      (dragRef.current?.startX ?? 0) - (dragRef.current?.lastX ?? 0);
    // If the new index is before the current image, or if the user is dragging backwards,
    // we need to scroll backwards
    const isBackwards = index < activeImage || currentDragDistance < 0;
    const distance =
      (element.clientWidth * itemsToScroll - Math.abs(currentDragDistance)) *
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
    const { clientX } = getClickPosition(ev);
    // save the initial click position
    dragRef.current = {
      startX: clientX,
    };
  };

  const onMouseMove = (
    ev:
      | React.MouseEvent<HTMLImageElement, MouseEvent>
      | React.TouchEvent<HTMLImageElement>
  ) => {
    if (!dragRef.current || !carouselRef.current) {
      return;
    }
    const { startX, lastX } = dragRef.current;
    const { clientX } = getClickPosition(ev);
    // calculate the delta between the last drag position and the current one
    // In case of first drag, use the initial click position
    const deltaX = (lastX ?? startX) - clientX;
    // discard small movements
    if (Math.abs(deltaX) < 5) {
      return;
    }
    // apply a scroll offset to the carousel
    carouselRef.current.scrollLeft += deltaX;
    // save the current drag position
    dragRef.current.lastX = clientX;
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

    if (distanceTraveled !== 0 && !isNaN(distanceTraveled)) {
      // On end, if the cursor traveled at least 20% of the carousel width, snap to the next image
      if (Math.abs(distanceTraveled) > imageWidth * 0.2) {
        const index = distanceTraveled < 0 ? activeImage - 1 : activeImage + 1;
        scrollTo(index);
      } else {
        // otherwise, snap back to the current image
        scrollTo(activeImage);
      }
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
              // if next active image is this one, set priority to true (preload)
              // activeImage starts at index 1, so no need to add 1
              priority={activeImage === i}
              placeholder="blur"
              blurDataURL={carouselPlaceholderBlur}
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
              src={`/images/kerhere/${category}/picture_${i + 1}.jpg`}
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
