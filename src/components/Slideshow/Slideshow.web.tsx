import React from "react";
import { css } from "../../utils";

import { useStyles } from "./Slideshow.style";

interface ISlideshowProps {
  imageCategory: string;
  onLeave: () => void;
  categories: string[];
}

/**
 * Find images in the image folder for that category.
 */
async function getImagesForCategory(category: string): Promise<string[]> {
  const baseUrl = "/images/";
  const images: string[] = [];
  let allFound = false;
  let index = 1;
  while (!allFound) {
    const img = new Image();
    await new Promise<void>((resolve) => {
      // on success, continue
      img.onload = () => resolve();
      // on error, stop the loop
      img.onerror = () => ((allFound = true), resolve());
      img.src = `${baseUrl}${category}/picture_${index}.jpg`;
    });
    if (!allFound) {
      images.push(img.src);
    }
    index++;
  }
  return images;
}

function scrollToPreviewedImage(selectedImage: number) {
  document
    .getElementById("slideshow-preview-container")
    ?.scrollTo(selectedImage * 150, 0);
}

export function Slideshow(props: ISlideshowProps) {
  const styles = useStyles();
  const [images, setImages] = React.useState<string[]>();
  const [selectedImage, setSelectedImage] = React.useState<number>(0);
  const currentCategory = React.useRef(props.imageCategory);
  const nbCategoryLoaded = React.useRef(0);
  const touchStartPos = React.useRef<null | number>(null);

  const nextImage = () => {
    if (!images) {
      return;
    }
    if (selectedImage + 1 >= images.length) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const previousImage = () => {
    if (!images) {
      return;
    }
    if (selectedImage - 1 < 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  scrollToPreviewedImage(selectedImage);

  // on mount load the requested images
  React.useEffect(() => {
    getImagesForCategory(props.imageCategory)
      .then(setImages)
      .then(() => nbCategoryLoaded.current++);
  }, [props.imageCategory]);

  // if we are getting close to the end of the images, load more
  React.useEffect(() => {
    if (!images || nbCategoryLoaded.current >= props.categories.length) {
      return;
    }
    // if we only have 5 images left, load more
    if (images.length - selectedImage < 5) {
      const currentCategoryIndex = props.categories.indexOf(
        currentCategory.current
      );
      const nextCategoryIndex =
        currentCategoryIndex + 1 >= props.categories.length
          ? 0
          : currentCategoryIndex + 1;
      // change the current category
      currentCategory.current = props.categories[nextCategoryIndex];
      getImagesForCategory(props.categories[nextCategoryIndex])
        .then((newImages) => setImages([...images, ...newImages]))
        .then(() => nbCategoryLoaded.current++);
    }
  }, [selectedImage, images]);

  React.useEffect(() => {
    const slideshow = document.getElementById("slideshow-img");

    const slideshowLeaveHandler = (ev: KeyboardEvent) => {
      switch (ev.key) {
        // if escape is pressed, leave
        case "Escape":
          props.onLeave();
          break;
        case "ArrowLeft":
          previousImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      // if drag end at left part of screen
      if (e.changedTouches[0].clientX < window.innerWidth / 2) {
        nextImage();
      } else {
        previousImage();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartPos.current = e.changedTouches[0].clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!slideshow || !touchStartPos.current) {
        return;
      }
      const pos = e.changedTouches[0].clientX;
      slideshow.style.marginLeft = `${pos - touchStartPos.current}px`;
    };

    document.addEventListener("keydown", slideshowLeaveHandler);

    slideshow?.addEventListener("touchstart", onTouchStart);
    slideshow?.addEventListener("touchend", onTouchEnd);
    slideshow?.addEventListener("touchmove", onTouchMove);

    // on unmount remove the listener
    return () => {
      document.removeEventListener("keydown", slideshowLeaveHandler);
      slideshow?.removeEventListener("touchstart", onTouchStart);
      slideshow?.removeEventListener("touchend", onTouchEnd);
      slideshow?.removeEventListener("touchmove", onTouchMove);
      if (slideshow) {
        slideshow.style.marginLeft = "0px";
      }
    };
  }, [images, selectedImage]);

  return (
    <div className={styles.slideshowWrapper}>
      {images && (
        <div className={styles.slideshow}>
          <img
            id="slideshow-img"
            className={styles.slideshowImage}
            src={images[selectedImage]}
          />
          <div
            className={styles.slideshowPreviewContainer}
            id="slideshow-preview-container"
          >
            {images.map((i, index) => (
              <img
                src={i}
                className={css(
                  selectedImage === index && styles.selected,
                  styles.slideshowPreviewImg
                )}
                key={`slideshow-preview-${i}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <button
            className={css(styles.navButton, styles.leftNav)}
            onClick={previousImage}
          >
            <i className="fas fa-arrow-circle-left"></i>
          </button>
          <button
            className={css(styles.navButton, styles.rightNav)}
            onClick={nextImage}
          >
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      )}
      <button onClick={() => props.onLeave()} className={styles.leaveButton}>
        <i className="far fa-window-close"></i>
      </button>
    </div>
  );
}
