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

export function Slideshow(props: ISlideshowProps) {
  const styles = useStyles();
  const [images, setImages] = React.useState<string[]>();
  const [selectedImage, setSelectedImage] = React.useState<number>(0);

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

  React.useEffect(() => {
    getImagesForCategory(props.imageCategory).then(setImages);
  }, [props.imageCategory]);

  React.useEffect(() => {
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

    document.addEventListener("keydown", slideshowLeaveHandler);
    // on unmount remove the listener
    return () => document.removeEventListener("keydown", slideshowLeaveHandler);
  }, [images, selectedImage]);

  return (
    <div className={styles.slideshowWrapper}>
      {images && (
        <div className={styles.slideshow}>
          <img className={styles.slideshowImage} src={images[selectedImage]} />
          <div className={styles.slideshowPreviewContainer}>
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
