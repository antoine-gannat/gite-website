import "./Gallery.styles.css";

import * as React from "react";

import { useLocalization } from "../../hooks/useLocalization";
import { DefaultProps } from "../../types/props";
import { css } from "../../utils";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";
import WebP from "../Miscs/WebP";
import strings from "./Gallery.strings.json";
import SlideShow from "./SlideShow/SlideShow.web";

let lastPage = 0;

export default function Gallery({ webpAvailable }: DefaultProps): JSX.Element {
  function changePage(newPage: number): void {
    lastPage = newPage;
    setPage(newPage);
  }
  const localizer = useLocalization(strings);
  const [page, setPage] = React.useState(0);
  const [slide, setSlide] = React.useState<string | null>(null);
  const nbPages = 2;
  const expandButton = (text: string) => (
    <div className="expand-button" tabIndex={-1}>
      <span>{text}</span>
    </div>
  );
  if (nbPages) {
    return <></>;
  }

  return (
    <section id="gallery">
      <CategoryTitle title={localizer("gallery")} />
      <div className="gallery row col-12">
        <button
          aria-label={localizer("prevPage")}
          className="prev"
          hidden={page - 1 < 0}
          onClick={() => changePage(page - 1)}
        >
          <i className="fas fa-chevron-left fa-2x"></i>
        </button>
        <div
          key="gallery-page-1"
          aria-hidden={page !== 0}
          className={css(
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
              aria-label={`${localizer("poolAlt")} ${localizer("slideshow")}`}
              src={WebP("/images/gallery-preview/pool.jpg", webpAvailable)}
              role="button"
              alt={localizer("poolAlt")}
              onClick={() => setSlide("pool")}
            />
            {expandButton(localizer("poolAlt"))}
          </div>
          <div className="row col-7 horizontal-container">
            <div className="horizontal-img">
              <img
                tabIndex={page !== 0 ? -1 : 0}
                aria-label={`${localizer("bedrooms")} ${localizer(
                  "slideshow"
                )}`}
                src={WebP("/images/gallery-preview/bedroom.jpg", webpAvailable)}
                role="button"
                alt={localizer("bedroomAlt")}
                onClick={() => setSlide("bedrooms")}
              />
              {expandButton(localizer("bedroomAlt"))}
            </div>
            <div className="horizontal-img">
              <img
                tabIndex={page !== 0 ? -1 : 0}
                aria-label={`${localizer("outdoorAlt")} ${localizer(
                  "slideshow"
                )}`}
                src={WebP("/images/gallery-preview/outdoor.jpg", webpAvailable)}
                role="button"
                alt={localizer("outdoorAlt")}
                onClick={() => setSlide("outdoor")}
              />
              {expandButton(localizer("outdoorAlt"))}
            </div>
          </div>
        </div>
        <div
          key="gallery-page-2"
          aria-hidden={page !== 1}
          className={css(
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
                aria-label={`${localizer("kitchenAlt")} ${localizer(
                  "slideshow"
                )}`}
                src={WebP("/images/gallery-preview/kitchen.jpg", webpAvailable)}
                role="button"
                alt={localizer("kitchenAlt")}
                onClick={() => setSlide("kitchen")}
              />
              {expandButton(localizer("kitchenAlt"))}
            </div>
            <div className="horizontal-img">
              <img
                tabIndex={page !== 1 ? -1 : 0}
                aria-label={`${localizer("environmentAlt")} ${localizer(
                  "slideshow"
                )}`}
                src={WebP(
                  "/images/gallery-preview/environment.jpg",
                  webpAvailable
                )}
                role="button"
                alt={localizer("environmentAlt")}
                onClick={() => setSlide("environment")}
              />
              {expandButton(localizer("environmentAlt"))}
            </div>
          </div>
          <div className="vertical-img right col-5">
            <img
              tabIndex={page !== 1 ? -1 : 0}
              aria-label={`${localizer("diningRoomAlt")} ${localizer(
                "slideshow"
              )}`}
              src={WebP(
                "/images/gallery-preview/dining-room.jpg",
                webpAvailable
              )}
              role="button"
              alt={localizer("diningRoomAlt")}
              onClick={() => setSlide("dining-room")}
            />
            {expandButton(localizer("diningRoomAlt"))}
          </div>
        </div>
        <button
          className="next"
          aria-label={localizer("nextPage")}
          hidden={page + 1 >= nbPages}
          onClick={() => changePage(page + 1)}
        >
          <i className="fas fa-chevron-right fa-2x"></i>
        </button>
      </div>
      {slide && <SlideShow imagesUrl={slide} setSlide={setSlide} />}
    </section>
  );
}
