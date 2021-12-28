import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LocalizationProvider } from "./hooks/useLocalization";
import Home from "./pages/Home/Home.web";
import { DefaultProps } from "./types/props";
import { TranslateLanguage } from "./types/translation";

export default function Router(): JSX.Element {
  function getBrowserLanguage(): TranslateLanguage | null {
    let browserLanguageParsed: string = navigator.language
      .slice(0, navigator.language.indexOf("-"))
      .toUpperCase();
    if (browserLanguageParsed === "US" || browserLanguageParsed === "EN") {
      return "EN";
    } else if (browserLanguageParsed === "FR") {
      return "FR";
    }

    return null;
  }

  function isWebpAvailable(): Promise<boolean> {
    return new Promise((res) => {
      const webP: HTMLImageElement = new Image();
      webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      webP.onload = webP.onerror = () => {
        res(webP.height === 2);
      };
    });
  }

  // Language to use if the browser's one is unknown and none is stored
  const backupLanguage = "FR";
  const [locale, setLocale] = React.useState(
    (localStorage.getItem("translation-language") as TranslateLanguage) ||
      getBrowserLanguage() ||
      backupLanguage
  );
  const [webpAvailable, setWebpAvailable] = React.useState<boolean>(false);

  const props: DefaultProps = {
    setLocale,
    webpAvailable,
  };

  // on mount
  React.useEffect(() => {
    isWebpAvailable().then((available) => setWebpAvailable(available));
  }, []);
  return (
    <BrowserRouter>
      <LocalizationProvider locale={locale}>
        <Switch>
          <Route path="/">
            <Home {...props} />
          </Route>
        </Switch>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
