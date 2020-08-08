import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.web";
import { DefaultProps } from "./types/props";
import { TranslateLanguage } from "./types/translate.d";

export default function Router(): JSX.Element {
    function getBrowserLanguage(): TranslateLanguage | null {
        let browserLanguageParsed: string = navigator.language
            .slice(0, navigator.language.indexOf("-"))
            .toUpperCase();
        if (browserLanguageParsed === "US" || browserLanguageParsed === "EN"){
          return ("EN");
        }
        else if (browserLanguageParsed === "FR"){
          return "FR";
        }

        return null;
    }

    // Language to use if the browser's one is unknown and none is stored
    const backupLanguage = "FR";
    const [language, setLanguage] = React.useState(
        localStorage.getItem("translation-language") ||
            getBrowserLanguage() ||
            backupLanguage
    );

    const props: DefaultProps = {
        language: language,
        setLanguage: setLanguage,
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home {...props} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
