import * as React from "react";
import Navbar from "../../components/Navbar/Navbar.web";
import "./Home.styles.css";
import PresentationCard from "../../components/PresentationCard/PresentationCard.web";

export default function Home(): JSX.Element {
  return (
    <main>
      <Navbar />
      <div className="homeImageContainer">
        <div className="centeredTitles">
          <h1>Gite Kerhéré</h1>
          <h2>Entre Terre et Mer</h2>
        </div>
      </div>
      <PresentationCard />
    </main>
  );
}
