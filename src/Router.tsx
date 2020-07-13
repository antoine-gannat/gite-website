import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.web";
import { DefaultProps } from "./types/props";

let browserLanguageParsed: string | null = navigator.language
  .slice(0, navigator.language.indexOf("-"))
  .toUpperCase();

// set to null if not EN or FR
browserLanguageParsed =
  browserLanguageParsed === "EN" || browserLanguageParsed === "FR"
    ? browserLanguageParsed
    : null;

const defaultProps: DefaultProps = {
  language:
    localStorage.getItem("translation-language") ||
    browserLanguageParsed ||
    "FR",
};

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home {...defaultProps} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
