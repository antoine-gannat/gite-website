export type TranslateLanguage = "FR" | "EN";

export type StringsObject = {
  FR: LocalizedStringObject;
  EN: LocalizedStringObject;
};

export type LocalizedStringObject = { [key: string]: string };
