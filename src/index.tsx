import "bootstrap/dist/css/bootstrap.min.css";
import "./index.styles.css";

import React from "react";
import ReactDOM from "react-dom";

import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
