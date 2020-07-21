import * as React from "react";
import Navbar from "../../components/Navbar/Navbar.web";
import "./Home.styles.css";
import PresentationCard from "../../components/PresentationCard/PresentationCard.web";
import { DefaultPropsWithTranslation } from "../../types/props";
import strings from "./Home.strings.json";
import { translateComponent } from "../../components/Translation/Translator";
import Gallery from "../../components/Gallery/Gallery.web";
import Footer from "../../components/Footer/Footer.web";
import Map from "../../components/Map/Map.web";
import Booking from "../../components/Booking/Booking.web";

function Home(props: DefaultPropsWithTranslation): JSX.Element {
  return (
    <div>
      <main data-spy="scroll" data-target="#navbar" data-offset="0">
        <Navbar {...props} />
        <div className="home-image-container" id="home">
          <div className="centered-titles">
            <h1>{props.translate("title")}</h1>
            <h2 className="fade-in">{props.translate("subtitle")}</h2>
            <a className="btn" href="#booking">
              {props.translate("booking")}
            </a>
          </div>
        </div>
        <div className="page-content">
          <PresentationCard {...props} />
          <Gallery {...props} />
          <Booking {...props} />
          <Map {...props} />
        </div>
      </main>
      <Footer {...props} />
    </div>
  );
}

export default translateComponent(Home, strings);
