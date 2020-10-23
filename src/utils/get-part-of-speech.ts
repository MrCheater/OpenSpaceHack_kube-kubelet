import { RussianPartOfSpeech, PartOfSpeech } from "./constants";

const getPartOfSpeech = (pos: string = ""): PartOfSpeech | null =>
  (RussianPartOfSpeech as any)[pos] ?? null;

export default getPartOfSpeech;
