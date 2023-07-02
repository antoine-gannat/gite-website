import {
  ILocalizedStrings,
  Locale,
  localizedStrings,
} from "./localizedStrings";

export interface ILocalizationProps {
  strings: ILocalizedStrings;
  locale: Locale;
}

export type IPropsWithLocalization<T = {}> = T & ILocalizationProps;

export function getLocalizationProps(
  locale: string | undefined
): ILocalizationProps {
  if (!locale) {
    throw new Error("Locale is undefined");
  }
  return {
    strings: localizedStrings[locale as Locale],
    locale: locale as Locale,
  };
}
