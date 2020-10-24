import { nonRelevantWords, questionBaseForms } from "./cache";
import { getTextGramInfoAlternatives } from "./utils";
import getAnswerTextByQuestionIndex from "./get-answer-text-by-question-index";
import replaceSynonyms from "./replace-synonyms";

const getAnswer = (question: string): string => {
  let answer =
    "Я не могу ответить на ваш вопрос. Попробуйте его переформулировать";

  let text = replaceSynonyms(question);

  const gramInfo = getTextGramInfoAlternatives(text);

  const textBaseForms = gramInfo.map((info) =>
    info.map((item) => item.baseForm).filter((word) => word != null)
  );

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
    answer = getAnswerTextByQuestionIndex(maxRankIndex);
  }

  return answer;
};

export default getAnswer;
