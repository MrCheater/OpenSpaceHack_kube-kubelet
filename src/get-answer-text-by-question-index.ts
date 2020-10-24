import database from "./database";

const getAnswerTextByQuestionIndex = (questionIndex: number): string => {
  return database[questionIndex].steps
    .map((step, index) => `${index + 1}. ${step}`)
    .join("\n");
};

export default getAnswerTextByQuestionIndex;
