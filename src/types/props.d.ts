export type DefaultProps = {
  language: TranslateLanguage;
};

export type DefaultPropsWithTranslation = DefaultProps & {
  translate: (key: string) => string;
};
