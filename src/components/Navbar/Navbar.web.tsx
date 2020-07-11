import * as React from "react";
import "./Navbar.styles.css";

export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav">
      <a className="navbar-brand" href="#">
        Gite Kerhéré
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Photos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Environment
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Réservation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
