export type DefaultProps = {
  language: TranslateLanguage;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export type DefaultPropsWithTranslation = DefaultProps & TranslationProps;

export type TranslationProps = {
  translate: (key: string) => string;
};
