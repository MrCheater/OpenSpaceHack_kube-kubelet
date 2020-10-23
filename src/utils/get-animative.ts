import { Animative, RussianGrammem } from "./constants";

const getAnimative = (grammems: Array<string> = []): string | null =>
  (RussianGrammem as any)[
    grammems.find(
      (grammem: string) =>
        (Animative as any)[(RussianGrammem as any)[grammem] ?? ""]
    ) ?? ""
  ] ?? null;

export default getAnimative;
