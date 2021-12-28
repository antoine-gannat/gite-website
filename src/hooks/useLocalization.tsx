import React from "react";

import defaultStrings from "../index.strings.json";
import { StringsObject, TranslateLanguage } from "../types/translation";

const LocalizationContext = React.createContext<TranslateLanguage>("FR");

export function useLocalization(strings: StringsObject) {
  // Merge the parameter strings with the default strings
  const localizedStrings = React.useMemo<StringsObject>(() => {
    let resultStrings = { EN: {}, FR: {} };
    Object.assign(resultStrings["FR"], defaultStrings.FR);
    Object.assign(resultStrings["EN"], defaultStrings.EN);
    if (strings) {
      Object.assign(resultStrings["FR"], strings.FR);
      Object.assign(resultStrings["EN"], strings.EN);
    }
    return resultStrings;
  }, [strings]);
  const locale = useLocale();

  return function useLocalizedKey(key: string): string {
    if (!localizedStrings[locale][key]) {
      console.warn("No translation found for key:", key);
      return localizedStrings.FR[key];
    }
    return localizedStrings[locale][key];
  };
}

export function useLocale(): TranslateLanguage {
  return React.useContext(LocalizationContext);
}

export function LocalizationProvider({
  locale,
  children,
}: React.PropsWithChildren<{
  locale: TranslateLanguage;
}>) {
  return (
    <LocalizationContext.Provider value={locale}>
      {children}
    </LocalizationContext.Provider>
  );
}
