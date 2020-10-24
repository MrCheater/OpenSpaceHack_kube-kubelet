import database from "./database";
import { replacement, nonRelevantWords, questionBaseForms } from "./cache";
import { getTextGramInfoAlternatives } from "./utils";

const getAnswer = (question: string): string => {
  let answer =
    "Я не могу ответить на ваш вопрос. Попробуйте его переформулировать";

  let text = "    " + question.toUpperCase().replace(/ /, "    ") + "    ";

  for (const [prev, next] of replacement) {
    for (;;) {
      const nextText = text.replace(` ${prev} `, ` ${next} `);
      if (nextText === text) {
        break;
      }
      text = nextText;
    }
  }

  text = text.replace(/\s+/gi, " ").trim();

  const gramInfo = getTextGramInfoAlternatives(text);

  const textBaseForms = gramInfo.map((info) =>
    info.map((item) => item.baseForm).filter((word) => word != null)
  );

  console.log({ textBaseForms });

  const questionCount = questionBaseForms.length;
  let maxRankIndex = -1;
  let maxRank = 0;
  for (let questionIndex = 0; questionIndex < questionCount; questionIndex++) {
    const questionBaseForm = questionBaseForms[questionIndex];
    for (const alternative of textBaseForms) {
      let rank = 0;
      for (const word of alternative) {
        if (word != null && questionBaseForm.includes(word)) {
          if (nonRelevantWords.includes(word)) {
            rank += 0.33;
          } else {
            rank += 1;
          }
        }
      }
      if (maxRank < rank) {
        maxRankIndex = questionIndex;
        maxRank = rank;
      }
    }
  }

  if (maxRankIndex !== -1) {
    answer = database[maxRankIndex].steps
      .map((step, index) => `${index + 1}. ${step}`)
      .join("\n");
  }

  return answer;
};

export default getAnswer;
