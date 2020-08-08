import { StringsObject, TranslateLanguage } from "../../types/translate";
import { DefaultProps, TranslationProps } from "../../types/props";
import defaultStrings from "../../index.strings.json";

class Translator {
  language: TranslateLanguage;
  strings: StringsObject;

  constructor(language: TranslateLanguage, strings: StringsObject) {
    this.language = language;
    this.strings = strings;
  }

  translate(key: string) {
    if (!this.strings[this.language][key]) {
      console.warn("No translation found for key:", key);
      return this.strings.FR[key];
    }
    return this.strings[this.language][key];
  }
}

export function translateComponent<T>(
  Component: (p: T & TranslationProps) => JSX.Element,
  strings?: StringsObject
) {
  // Merge the parameter strings with the default strings
  function mergeWithDefaultStrings(): StringsObject {
    let resultStrings = { EN: {}, FR: {} };
    Object.assign(resultStrings["FR"], defaultStrings.FR);
    Object.assign(resultStrings["EN"], defaultStrings.EN);
    if (strings) {
      Object.assign(resultStrings["FR"], strings.FR);
      Object.assign(resultStrings["EN"], strings.EN);
    }
    return resultStrings;
  }

  return function translatedComponent(props: T & DefaultProps): JSX.Element {
    const translator = new Translator(
      props.language,
      mergeWithDefaultStrings()
    );
    return Component({
      ...props,
      translate: translator.translate.bind(translator),
    });
  };
}
