import * as React from "react";
import Navbar from "../../components/Navbar/Navbar.web";
import "./Home.styles.css";
import PresentationCard from "../../components/PresentationCard/PresentationCard.web";
import { DefaultPropsWithTranslation } from "../../types/props";
import strings from "./Home.strings.json";
import { translateComponent } from "../../components/Translation/Translator";
import Galery from "../../components/Galery/Galery.web";

function Home(props: DefaultPropsWithTranslation): JSX.Element {
  return (
    <main>
      <Navbar {...props} />
      <div className="home-image-container" id="home">
        <div className="centered-titles">
          <h1>{props.translate("title")}</h1>
          <h2 className="fade-in">{props.translate("subtitle")}</h2>
        </div>
      </div>
      <div className="col-8 offset-2 page-content">
        <PresentationCard {...props} />
        <Galery {...props} />
      </div>
    </main>
  );
}

export default translateComponent(Home, strings);
