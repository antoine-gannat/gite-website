import { DefaultPropsWithTranslation } from "../../types/props";
import strings from "./Gallery.strings.json";
import * as React from "react";
import { translateComponent } from "../Translation/Translator";
import "./Gallery.styles.css";
import SlideShow from "./SlideShow/SlideShow.web";
import CategoryTitle from "../Miscs/CategoryTitle/CategoryTitle.web";

function Gallery(props: DefaultPropsWithTranslation): JSX.Element {
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

  const pages: JSX.Element[] = [
    <div key="gallery-page-1" className="page-container row">
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
    </div>,
    <div key="gallery-page-2" className="page-container row">
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
    </div>,
  ];

  return (
    <section
      id="gallery"
      className="col-sm-12 col-lg-10 col-md-10 offset-lg-1 offset-md-1"
    >
      <CategoryTitle title={translate("gallery")} />
      <div className="gallery row col-12">
        <button
          className="prev"
          hidden={page - 1 < 0}
          onClick={() => setPage(page - 1)}
        >
          <i className="fas fa-chevron-left fa-2x"></i>
        </button>
        {pages[page]}
        <button
          className="next"
          hidden={page + 1 >= nbPages}
          onClick={() => setPage(page + 1)}
        >
          <i className="fas fa-chevron-right fa-2x"></i>
        </button>
      </div>
      {slide && <SlideShow {...props} imagesUrl={slide} setSlide={setSlide} />}
    </section>
  );
}

export default translateComponent(Gallery, strings);
