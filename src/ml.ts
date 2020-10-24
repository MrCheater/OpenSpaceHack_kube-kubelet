import fs from "fs";
import path from "path";
import axios from "axios";
import FormData from "form-data";

import getTextGramInfoAlternatives from "./utils/get-text-gram-info-alternatives";
import database from "./database";

const rawQuestionBaseForms = database.map((record) =>
  Array.from(
    new Set<string>(
      getTextGramInfoAlternatives(record.question).map((items) =>
        items.map((item) => item.baseForm).join(" ")
      )
    )
  )
);

for (const item of rawQuestionBaseForms) {
  if (item.length != 1) {
    throw new Error();
  }
}

const questionBaseForms = rawQuestionBaseForms.map((rawItem) =>
  rawItem[0].split(" ")
);

const rawQuestionWords = new Set<string>();

for (const questionBaseForm of questionBaseForms) {
  for (const word of questionBaseForm) {
    rawQuestionWords.add(word);
  }
}

const questionWords = Array.from(
  rawQuestionWords
).sort((a: string, b: string): number => (a > b ? 1 : a < b ? -1 : 0));

void (async () => {
  let replacement: Array<[string, string]> = [];
  for (const questionWord of questionWords) {
    for (let retry = 0; retry < 10; retry++) {
      try {
        const formData = new FormData();

        formData.append("word", questionWord);

        const formHeaders = formData.getHeaders();

        const synonyms: Array<string> | undefined = (
          await axios.post(
            "https://synonymonline.ru/assets/json/synonyms.json",
            formData,
            {
              headers: {
                ...formHeaders,
              },
            }
          )
        ).data.synonyms;

        if (synonyms != null) {
          for (const synonym of synonyms) {
            const item: [string, string] = [
              synonym.toUpperCase(),
              questionWord.toUpperCase(),
            ];
            replacement.push(item);
            console.log(item);
          }
        }
      } catch (error) {}
      break;
    }
  }

  replacement.sort((a: [string, string], b: [string, string]): number =>
    a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  );

  replacement = [
    ["БАНКА", "БАНК"],
    ["ДОКУМЕН", "ДОКУМЕНТ"],
    ["БЫТЬ", "ЕСТЬ"],
    ["ВЕСЬ", "ВСЕ"],
    ["КАКАТЬ", "КАКОЙ"],
    ["ЛЮБА", "ЛЮБОЙ"],
    ["МЕНЬ", "МЕНЯ"],
    ["МЫТЬ", "МОЙ"],
    ["АБСОЛЮТНО", "ВЕСЬ"],
    ["ПОЛНОСТЬЮ", "ВЕСЬ"],
    ["ПОЛНЫЙ", "ВЕСЬ"],
    ["АБСОЛЮТНЫЙ", "ВЕСЬ"],
    ["СОВЕРШЕННЫЙ", "ВЕСЬ"],
    ...replacement,
  ];

  const nonRelevantWords = [
    "БЕЗ",
    "В",
    "ВСЕ",
    "ГДЕ",
    "ДЛЯ",
    "ДО",
    "ЕГО",
    "ЕСЛИ",
    "ЕСТЬ",
    "Ж",
    "ЗА",
    "И",
    "ИЗ",
    "ИЛИ",
    "К",
    "КАЖДЫЙ",
    "КАК",
    "КАКОЙ",
    "КОГДА",
    "ЛИ",
    "МОЖНО",
    "НА",
    "О",
    "ОБ",
    "ОН",
    "ОТ",
    "ПО",
    "ПРИ",
    "С",
    "СО",
    "У",
    "УЖЕ",
    "Я",
  ];

  fs.writeFileSync(
    path.join(__dirname, "cache.ts"),
    `
    export const nonRelevantWords: Array<string> = ${JSON.stringify(
      nonRelevantWords,
      null,
      2
    )}
    
    export const questionBaseForms: Array<Array<string>> = ${JSON.stringify(
      questionBaseForms,
      null,
      2
    )}
    
    export const questionWords: Array<string> = ${JSON.stringify(
      questionWords,
      null,
      2
    )}
    
    export const replacement: Array<[string,string]> = ${JSON.stringify(
      replacement,
      null,
      2
    )}
    `
  );
})();
