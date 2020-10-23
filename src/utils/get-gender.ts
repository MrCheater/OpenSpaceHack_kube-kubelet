import { Gender, RussianGrammem } from "./constants";

const getGender = (grammems: Array<string> = []): string | null =>
  (RussianGrammem as any)[
    grammems.find(
      (grammem: string) =>
        (Gender as any)[(RussianGrammem as any)[grammem] ?? ""]
    ) ?? ""
  ] ?? null;

export default getGender;
