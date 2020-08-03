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
  React.useEffect(() => {
    const sectionsPosition: any = {};
    // Change the page title and description
    document.title = props.translate("pageTitle");
    let metaDescriptionEl = document
      .getElementsByTagName("meta")
      .namedItem("description");
    if (metaDescriptionEl) {
      metaDescriptionEl.content = props.translate("pageDescription");
    }

    setTimeout(() => {
      document.querySelectorAll("section").forEach((section) => {
        sectionsPosition[section.id] = section.offsetTop;
      });
      window.onscroll = function () {
        const scrollPosition =
          document.documentElement.scrollTop || document.body.scrollTop;

        for (const key in sectionsPosition) {
          if (sectionsPosition[key] <= scrollPosition) {
            document
              .querySelector(".active")
              ?.setAttribute("class", "nav-link");
            document
              .querySelector("button[data-scrollto*=" + key + "]")
              ?.setAttribute("class", "nav-link active");
          }
        }
      };
    }, 1000);
  });
  return (
    <div>
      <main>
        <Navbar {...props} />
        <section className="home-image-container" id="home">
          <div className="centered-titles">
            <h1>{props.translate("title")}</h1>
            <h2 className="fade-in">{props.translate("subtitle")}</h2>
            <a className="btn" href="#booking">
              {props.translate("booking")}
            </a>
          </div>
        </section>
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
