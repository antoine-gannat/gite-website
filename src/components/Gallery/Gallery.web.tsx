import { DefaultPropsWithTranslation } from "../../types/props";
import strings from "./Gallery.strings.json";
import * as React from "react";
import { translateComponent } from "../Translation/Translator";
import "./Gallery.styles.css";
import SlideShow from "./SlideShow/SlideShow.web";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import { cssMerge } from "../Miscs/styles";
import WebP from "../Miscs/WebP";

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
  const expandButton = (text: string) => (
    <div className="expand-button" tabIndex={-1}>
      <i className="fas fa-expand-alt fa-2x"></i>
      <span>{text}</span>
    </div>
  );

  return (
    <section id="gallery">
      <CategoryTitle title={translate("gallery")} />
      <div className="gallery row col-12">
        <button
          aria-label={translate("prevPage")}
          className="prev"
          hidden={page - 1 < 0}
          onClick={() => changePage(page - 1)}
        >
          <i className="fas fa-chevron-left fa-2x"></i>
        </button>
        <div
          key="gallery-page-1"
          aria-hidden={page !== 0}
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
              tabIndex={page !== 0 ? -1 : 0}
              aria-label={`${translate("poolAlt")} ${translate("slideshow")}`}
              src={WebP("/images/gallery-preview/pool.jpg", props.webpAvailable)}
              role="button"
              alt={translate("poolAlt")}
              onClick={() => setSlide("pool")}
            />
            {expandButton(translate("poolAlt"))}
          </div>
          <div className="row col-7 horizontal-container">
            <div className="horizontal-img">
              <img
                tabIndex={page !== 0 ? -1 : 0}
                aria-label={`${translate("bedrooms")} ${translate(
                  "slideshow"
                )}`}
                src={WebP("/images/gallery-preview/bedroom.jpg", props.webpAvailable)}
                role="button"
                alt={translate("bedroomAlt")}
                onClick={() => setSlide("bedrooms")}
              />
              {expandButton(translate("bedroomAlt"))}
            </div>
            <div className="horizontal-img">
              <img
                tabIndex={page !== 0 ? -1 : 0}
                aria-label={`${translate("outdoorAlt")} ${translate(
                  "slideshow"
                )}`}
                src={WebP("/images/gallery-preview/outdoor.jpg", props.webpAvailable)}
                role="button"
                alt={translate("outdoorAlt")}
                onClick={() => setSlide("outdoor")}
              />
              {expandButton(translate("outdoorAlt"))}
            </div>
          </div>
        </div>
        <div
          key="gallery-page-2"
          aria-hidden={page !== 1}
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
                tabIndex={page !== 1 ? -1 : 0}
                aria-label={`${translate("kitchenAlt")} ${translate(
                  "slideshow"
                )}`}
                src={WebP("/images/gallery-preview/kitchen.jpg", props.webpAvailable)}
                role="button"
                alt={translate("kitchenAlt")}
                onClick={() => setSlide("kitchen")}
              />
              {expandButton(translate("kitchenAlt"))}
            </div>
            <div className="horizontal-img">
              <img
                tabIndex={page !== 1 ? -1 : 0}
                aria-label={`${translate("environmentAlt")} ${translate(
                  "slideshow"
                )}`}
                src={WebP("/images/gallery-preview/environment.jpg", props.webpAvailable)}
                role="button"
                alt={translate("environmentAlt")}
                onClick={() => setSlide("environment")}
              />
              {expandButton(translate("environmentAlt"))}
            </div>
          </div>
          <div className="vertical-img right col-5">
            <img
              tabIndex={page !== 1 ? -1 : 0}
              aria-label={`${translate("diningRoomAlt")} ${translate(
                "slideshow"
              )}`}
              src={WebP("/images/gallery-preview/dining-room.jpg", props.webpAvailable)}
              role="button"
              alt={translate("diningRoomAlt")}
              onClick={() => setSlide("dining-room")}
            />
            {expandButton(translate("diningRoomAlt"))}
          </div>
        </div>
        <button
          className="next"
          aria-label={translate("nextPage")}
          hidden={page + 1 >= nbPages}
          onClick={() => changePage(page + 1)}
        >
          <i className="fas fa-chevron-right fa-2x"></i>
        </button>
      </div>
      {slide && <SlideShow {...props} imagesUrl={slide} setSlide={setSlide} />}
    </section>
  );
}

export default translateComponent(Gallery, strings);
