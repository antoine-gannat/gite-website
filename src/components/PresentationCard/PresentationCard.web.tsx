import * as React from "react";
import "./PresentationCard.styles.css";

export default function PresentationCard(): JSX.Element {
  return (
    <section className="presentationCardContainer col-12 offset-lg-1">
      <div className="row col-lg-10 col-12">
        <img
          src="/images/piscine/picture_1.jpg"
          className="col-lg-6 col-md-6 col-sm-6"
        />
        <div className="col-lg-6 col-md-6 col-sm-6">
          <h3>Présentation</h3>
        </div>
      </div>
    </section>
  );
}
