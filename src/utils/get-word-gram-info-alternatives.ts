import morphy from "./morphy";
import getBaseForm from "./get-base-form";
import getPartOfSpeech from "./get-part-of-speech";
import getNumber from "./get-number";
import getCase from "./get-case";
import getGender from "./get-gender";
import getTime from "./get-time";
import getPerson from "./get-person";
import getAnimative from "./get-animative";
import { WordGramInfo } from "./constants";

const getWordGramInfoAlternatives = (
  word: string
): Array<WordGramInfo> | null => {
  const wordNoJo = word.replace(/ё/g, "е").replace(/Ё/g, "Е");

  const gramInfo = morphy.getGramInfo(wordNoJo, false);
  if (gramInfo == null) {
    return null;
  }
  const info = gramInfo[0];
  if (Array.isArray(info)) {
    return info.map(
      (item: { pos?: string; grammems?: Array<string> } = {}) => ({
        word,
        baseForm: getBaseForm(wordNoJo),
        partOfSpeech: getPartOfSpeech(item.pos),
        number: getNumber(item.grammems),
        case: getCase(item.grammems),
        gender: getGender(item.grammems),
        time: getTime(item.grammems),
        person: getPerson(item.grammems),
        animative: getAnimative(item.grammems),
      })
    );
  }
  return null;
};

export default getWordGramInfoAlternatives;
