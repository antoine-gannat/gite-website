import { StringsObject, TranslateLanguage } from "../../types/translate";
import { DefaultProps, DefaultPropsWithTranslation } from "../../types/props";

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

export function translateComponent(
  Component: (p: DefaultPropsWithTranslation) => JSX.Element,
  stringsArr: StringsObject[]
) {
  let strings = { EN: {}, FR: {} };
  stringsArr.forEach((string) => {
    Object.assign(strings["FR"], string.FR);
    Object.assign(strings["EN"], string.EN);
  });
  return function translatedComponent(props: DefaultProps): JSX.Element {
    const translator = new Translator(props.language, strings);
    return Component({
      ...props,
      translate: translator.translate.bind(translator),
    });
  };
}
