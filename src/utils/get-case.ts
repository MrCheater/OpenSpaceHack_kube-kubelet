import { Case, RussianGrammem } from "./constants";

const getCase = (grammems: Array<string> = []): string | null =>
  (RussianGrammem as any)[
    grammems.find(
      (grammem: string) => (Case as any)[(RussianGrammem as any)[grammem] ?? ""]
    ) ?? ""
  ] ?? null;

export default getCase;
