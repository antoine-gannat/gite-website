import { DefaultPropsWithTranslation } from "../../../types/props";
import * as React from "react";
import { translateComponent } from "../../Translation/Translator";
import strings from "./Slideshow.strings.json";
import "./SlideShow.styles.css";

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
  bedrooms: 10,
  "dining-room": 5,
  environment: 7,
  kitchen: 5,
  outdoor: 13,
  pool: 10,
};

function SlideShow(
  props: SlideShowProps & DefaultPropsWithTranslation
): JSX.Element {
  const [selectedImage, setSelectedImage] = React.useState(0);
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
        <div className="display-container col-sm-12 col-md-10 col-lg-10 offset-md-1 offset-lg-1">
          <button
            className="nav-button"
            aria-label={props.translate("prevPicture")}
            onClick={() =>
              setSelectedImage(
                selectedImage === 0 ? images.length - 1 : selectedImage - 1
              )
            }
          >
            <i className="fas fa-chevron-left fa-3x"></i>
          </button>
          <img
            className="displayed-image"
            src={images[selectedImage]}
            alt={props.imagesUrl}
          />
          <button
            className="nav-button"
            aria-label={props.translate("nextPicture")}
            onClick={() =>
              setSelectedImage(
                selectedImage + 1 >= images.length ? 0 : selectedImage + 1
              )
            }
          >
            <i className="fas fa-chevron-right fa-3x"></i>
          </button>
        </div>
        <nav>
          <ul>
            {images.map((img, index) => (
              <li
                tabIndex={0}
                aria-label={`${props.translate("picture")} ${index}`}
                key={`slideshow-img-${index}`}
                role="button"
                onClick={() => setSelectedImage(index)}
                className={index === selectedImage ? "selected" : ""}
              >
                <img src={img} alt={props.imagesUrl} />
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="btn close-slide-btn"
          onClick={() => props.setSlide(null)}
          aria-label={props.translate("quitSlideshow")}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="darkener"></div>
    </div>
  );
}

export default translateComponent<SlideShowProps & DefaultPropsWithTranslation>(
  SlideShow,
  strings
);
