import { DefaultPropsWithTranslation } from "../../../types/props";
import * as React from "react";
import { translateComponent } from "../../Translation/Translator";
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

function SlideShow(
  props: SlideShowProps & DefaultPropsWithTranslation
): JSX.Element {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const images = findImages();

  function doesFileExists(url: string) {
    var http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    return http.status !== 404;
  }

  // find all images in a folder
  function findImages() {
    let images: string[] = [];
    let i = 1;
    const baseUrl = `/images/${props.imagesUrl}/picture_`;
    while (doesFileExists(`${baseUrl}${i}.jpg`)) {
      images.push(`${baseUrl}${i}.jpg`);
      i++;
    }
    return images;
  }
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

  return (
    <div>
      <div className="slideshow">
        <div className="display-container col-sm-12 col-md-10 col-lg-10 offset-md-1 offset-lg-1">
          <button
            className="nav-button"
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
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="darkener"></div>
    </div>
  );
}

export default translateComponent<SlideShowProps & DefaultPropsWithTranslation>(
  SlideShow
);
