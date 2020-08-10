export type DefaultProps = {
  language: TranslateLanguage;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  webpAvailable: boolean;
};

export type DefaultPropsWithTranslation = DefaultProps & TranslationProps;

export type TranslationProps = {
  translate: (key: string) => string;
};
