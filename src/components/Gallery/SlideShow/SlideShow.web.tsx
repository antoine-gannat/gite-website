import { DefaultPropsWithTranslation } from "../../../types/props";
import * as React from "react";
import { translateComponent } from "../../Translation/Translator";
import "./SlideShow.styles.css";

type SlideShowProps = {
  imagesUrl: string;
  setSlide: React.Dispatch<React.SetStateAction<string | null>>;
};

function SlideShow(
  props: SlideShowProps & DefaultPropsWithTranslation
): JSX.Element {
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
  const [selectedImage, setSelectedImage] = React.useState(0);
  const images = findImages();

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
            <i className="fas fa-chevron-left"></i>
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
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <nav>
          <ul>
            {images.map((img, index) => (
              <li
                key={`slideshow-img-${index}`}
                role="button"
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={props.imagesUrl} />
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="btn btn-primary close-slide-btn"
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
