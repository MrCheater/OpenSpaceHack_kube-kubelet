import {
  WordGramInfo,
  Time,
  Case,
  Animative,
  Gender,
  Grammem,
  Number,
  PartOfSpeech,
  Person,
  RussianGrammem,
  RussianPartOfSpeech,
} from "./constants";

const getNumber = (grammems: Array<string> = []): string | null =>
  (RussianGrammem as any)[
    grammems.find(
      (grammem: string) =>
        (Number as any)[(RussianGrammem as any)[grammem] ?? ""]
    ) ?? ""
  ] ?? null;

export default getNumber;
