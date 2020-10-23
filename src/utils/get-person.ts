import { Person, RussianGrammem } from "./constants";

const getPerson = (grammems: Array<string> = []): string | null =>
  (RussianGrammem as any)[
    grammems.find(
      (grammem: string) =>
        (Person as any)[(RussianGrammem as any)[grammem] ?? ""]
    ) ?? ""
  ] ?? null;

export default getPerson;
