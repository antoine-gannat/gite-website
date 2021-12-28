import { TranslateLanguage } from "./translation";

export type DefaultProps = {
  setLocale: React.Dispatch<React.SetStateAction<TranslateLanguage>>;
  webpAvailable: boolean;
};

export type TranslationProps = {
  translate: (key: string) => string;
};
