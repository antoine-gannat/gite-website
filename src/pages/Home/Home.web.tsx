import "./Home.styles.css";

import * as React from "react";

import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo.web";
import Booking from "../../components/Booking/Booking.web";
import Footer from "../../components/Footer/Footer.web";
import Gallery from "../../components/Gallery/Gallery.web";
import Map from "../../components/Map/Map.web";
import Navbar from "../../components/Navbar/Navbar.web";
import PresentationCard from "../../components/PresentationCard/PresentationCard.web";
import Reviews from "../../components/Reviews/Reviews.web";
import { useLocale, useLocalization } from "../../hooks/useLocalization";
import { DefaultProps } from "../../types/props";
import strings from "./Home.strings.json";

export default function Home(props: DefaultProps): JSX.Element {
  const localizer = useLocalization(strings);
  const locale = useLocale();
  React.useEffect(() => {
    const sectionsPosition: any = {};

    // change html tag "lang" to use FR or EN based on the language
    document.getElementsByTagName("html")[0]?.setAttribute("lang", locale);
    // Change the page title and description
    document.title = localizer("pageTitle");
    let metaDescriptionEl = document
      .getElementsByTagName("meta")
      .namedItem("description");
    if (metaDescriptionEl) {
      metaDescriptionEl.content = localizer("pageDescription");
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
            <h1>{localizer("title")}</h1>
            <h2 className="fade-in">{localizer("subtitle")}</h2>
            <a data-scrollto="booking" className="btn" href="#booking">
              {localizer("booking")}
            </a>
          </div>
        </section>
        <div className="page-content">
          <PresentationCard {...props} />
          <Gallery />
          <Booking />
          <Reviews />
          <Map />
          <AdditionalInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
