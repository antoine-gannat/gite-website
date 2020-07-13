import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.web";
import { DefaultProps } from "./types/props";

const defaultProps: DefaultProps = {
  language: localStorage.getItem("translation-language") || "FR",
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
