import { DefaultPropsWithTranslation } from "../../types/props";
import strings from "./Gallery.strings.json";
import * as React from "react";
import { translateComponent } from "../Translation/Translator";
import "./Gallery.styles.css";
import SlideShow from "./SlideShow/SlideShow.web";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import { cssMerge } from "../Miscs/styles";

let lastPage = 0;

function Gallery(props: DefaultPropsWithTranslation): JSX.Element {
  function changePage(newPage: number): void {
    lastPage = newPage;
    setPage(newPage);
  }
  const translate = props.translate;
  const [page, setPage] = React.useState(0);
  const [slide, setSlide] = React.useState<string | null>(null);
  const nbPages = 2;
  const expandButton = (
    <button className="expand-button">
      <i className="fas fa-expand-alt fa-2x"></i>
      {translate("more")} ..
    </button>
  );

  return (
    <section id="gallery">
      <div className="col-12">
        <CategoryTitle title={translate("gallery")} />
        <div className="gallery row col-12">
          <button
            className="prev"
            hidden={page - 1 < 0}
            onClick={() => changePage(page - 1)}
          >
            <i className="fas fa-chevron-left fa-2x"></i>
          </button>
          <div
            key="gallery-page-1"
            className={cssMerge(
              "page-container row",
              page !== 0
                ? page >= lastPage
                  ? "hide-slide-left"
                  : "hide-slide-right"
                : "visible"
            )}
          >
            <div className="vertical-img left col-5">
              <img
                src="/images/pool/picture_1.jpg"
                role="button"
                alt={translate("poolAlt")}
                onClick={() => setSlide("pool")}
              />
              {expandButton}
            </div>
            <div className="row col-7 horizontal-container">
              <div className="horizontal-img">
                <img
                  src="/images/bedrooms/picture_6.jpg"
                  role="button"
                  alt={translate("bedroomAlt")}
                  onClick={() => setSlide("bedrooms")}
                />
                {expandButton}
              </div>
              <div className="horizontal-img">
                <img
                  src="/images/outdoor/picture_3.jpg"
                  role="button"
                  alt={translate("outdoorAlt")}
                  onClick={() => setSlide("outdoor")}
                />
                {expandButton}
              </div>
            </div>
          </div>
          <div
            key="gallery-page-2"
            className={cssMerge(
              "page-container row",
              page !== 1
                ? page > lastPage
                  ? "hide-slide-left"
                  : "hide-slide-right"
                : "visible"
            )}
          >
            <div className="row col-7 horizontal-container">
              <div className="horizontal-img">
                <img
                  src="/images/kitchen/picture_1.jpg"
                  role="button"
                  alt={translate("kitchenAlt")}
                  onClick={() => setSlide("kitchen")}
                />
                {expandButton}
              </div>
              <div className="horizontal-img">
                <img
                  src="/images/environment/picture_1.jpg"
                  role="button"
                  alt={translate("environmentAlt")}
                  onClick={() => setSlide("environment")}
                />
                {expandButton}
              </div>
            </div>
            <div className="vertical-img right col-5">
              <img
                src="/images/dining-room/picture_1.jpg"
                role="button"
                alt={translate("diningRoomAlt")}
                onClick={() => setSlide("dining-room")}
              />
              {expandButton}
            </div>
          </div>
          <button
            className="next"
            hidden={page + 1 >= nbPages}
            onClick={() => changePage(page + 1)}
          >
            <i className="fas fa-chevron-right fa-2x"></i>
          </button>
        </div>
        {slide && (
          <SlideShow {...props} imagesUrl={slide} setSlide={setSlide} />
        )}
      </div>
    </section>
  );
}

export default translateComponent(Gallery, strings);
