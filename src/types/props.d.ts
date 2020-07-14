export type DefaultProps = {
  language: TranslateLanguage;
};

export type DefaultPropsWithTranslation = DefaultProps & TranslationProps;

export type TranslationProps = {
  translate: (key: string) => string;
};
