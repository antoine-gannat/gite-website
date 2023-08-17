import { ILocalizedStrings, Locale, Strings } from "./strings.types.generated";

export interface ILocalizationProps {
  strings: ILocalizedStrings;
  locale: Locale;
}

export type IPropsWithLocalization<T = {}> = T & ILocalizationProps;

export function getLocalizationProps(
  locale: string | undefined,
  localizedStrings: Record<Locale, Record<Strings, string>>
): ILocalizationProps {
  if (!locale) {
    throw new Error("Locale is undefined");
  }
  return {
    strings: localizedStrings[locale as Locale],
    locale: locale as Locale,
  };
}
