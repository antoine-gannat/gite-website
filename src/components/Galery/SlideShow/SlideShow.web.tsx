import { DefaultPropsWithTranslation } from "../../../types/props";
import * as React from "react";
import { translateComponent } from "../../Translation/Translator";
import "./SlideShow.styles.css";

type SlideShowProps = {
  imagesUrl?: string;
};

function SlideShow(
  props: SlideShowProps & DefaultPropsWithTranslation
): JSX.Element {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [images, setImages] = React.useState<string[]>([]);
  React.useEffect(() => {
    setImages(findImages());
  }, []);
  function doesFileExists(url: string) {
    var http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    return http.status != 404;
  }

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
  return (
    <div>
      <div className="slideshow">
        <img
          className="displayed-image col-sm-12 col-md-10 col-lg-10 offset-md-1 offset-lg-1"
          src={images[selectedImage]}
        />
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
      </div>
      <div className="darkener"></div>
    </div>
  );
}

export default translateComponent<SlideShowProps & DefaultPropsWithTranslation>(
  SlideShow,
  []
);
