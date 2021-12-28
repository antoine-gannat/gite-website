import "./SlideShow.styles.css";

import * as React from "react";

import { cssMerge } from "../../Miscs/styles";
import strings from "./Slideshow.strings.json";
import { useLocalization } from "../../../hooks/useLocalization";

type SlideShowProps = {
  imagesUrl: string;
  setSlide: React.Dispatch<React.SetStateAction<string | null>>;
};

enum Keys {
  Escape = 27,
  Left = 37,
  Right = 39,
}

const nbPicturesPerFolder: { [folderName: string]: number } = {
  bedrooms: 9,
  "dining-room": 5,
  environment: 5,
  kitchen: 5,
  outdoor: 14,
  pool: 8,
};

export default function SlideShow(props: SlideShowProps): JSX.Element {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const localizer = useLocalization(strings);
  let images: string[] = [];
  // Add event listener on mount
  React.useEffect(() => {
    function onKeyDown(this: Document, ev: KeyboardEvent) {
      // If escape is pressed, leave
      if (ev.keyCode === Keys.Escape) {
        props.setSlide(null);
      } else if (ev.keyCode === Keys.Left) {
        setSelectedImage(
          selectedImage === 0 ? images.length - 1 : selectedImage - 1
        );
      } else if (ev.keyCode === Keys.Right) {
        setSelectedImage(
          selectedImage + 1 >= images.length ? 0 : selectedImage + 1
        );
      }
    }
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [props, images.length, selectedImage]);

  if (!nbPicturesPerFolder[props.imagesUrl]) {
    props.setSlide(null);
  }
  // Set the images url in an array
  for (let i = 1; i <= nbPicturesPerFolder[props.imagesUrl]; i++) {
    images.push(`/images/${props.imagesUrl}/picture_${i}.jpg`);
  }

  return (
    <div>
      <div className="slideshow">
        <div id="slideshow" className="carousel slide" data-interval="false">
          <ol className="carousel-indicators">
            {images.map((image, index) => (
              <li
                key={`slideshow-nav-${index}`}
                data-target="#slideshow"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                className={cssMerge(
                  "carousel-item",
                  index === 0 ? "active" : ""
                )}
                key={`slideshow-img-${index}`}
              >
                <img className="d-block w-100" src={image} alt="First slide" />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#slideshow"
            role="button"
            data-slide="prev"
            aria-label={localizer("prevPicture")}
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#slideshow"
            role="button"
            data-slide="next"
            aria-label={localizer("nextPicture")}
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>

        <button
          className="btn close-slide-btn"
          onClick={() => props.setSlide(null)}
          aria-label={localizer("quitSlideshow")}
        >
          <span>{localizer("quitSlideshow")} </span>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="darkener"></div>
    </div>
  );
}
