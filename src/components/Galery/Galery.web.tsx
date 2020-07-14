import { DefaultPropsWithTranslation } from "../../types/props";
import strings from "./Galery.strings.json";
import * as React from "react";
import { translateComponent } from "../Translation/Translator";
import "./Galery.styles.css";

const expandButton = (
  <button className="expand-button">
    <i className="fas fa-expand-alt fa-2x"></i>Plus ..
  </button>
);

const pages: JSX.Element[] = [
  <div key="galery-page-1" className="page-container row">
    <div className="vertical-img left col-5">
      <img src="/images/pool/picture_1.jpg" role="button" />
      {expandButton}
    </div>
    <div className="row col-7 horizontal-container">
      <div className="horizontal-img">
        <img src="/images/bedrooms/picture_6.jpg" role="button" />
        {expandButton}
      </div>
      <div className="horizontal-img">
        <img src="/images/outdoor/picture_3.jpg" role="button" />
        {expandButton}
      </div>
    </div>
  </div>,
  <div key="galery-page-2" className="page-container row">
    <div className="row col-7 horizontal-container">
      <div className="horizontal-img">
        <img src="/images/kitchen/picture_1.jpg" role="button" />
        {expandButton}
      </div>
      <div className="horizontal-img">
        <img src="/images/environnement/picture_1.jpg" role="button" />
        {expandButton}
      </div>
    </div>
    <div className="vertical-img right col-5">
      <img src="/images/dining-room/picture_1.jpg" role="button" />
      {expandButton}
    </div>
  </div>,
];

function Galery(props: DefaultPropsWithTranslation): JSX.Element {
  const [page, setPage] = React.useState(0);
  const nbPages = 2;
  return (
    <section id="galery" className="col-10 offset-1">
      <div className="galery row col-12">
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
    </section>
  );
}

export default translateComponent(Galery, strings);
