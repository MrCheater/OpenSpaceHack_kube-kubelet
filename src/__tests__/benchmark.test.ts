import database from "../database";
import getAnswer from "../get-answer";
import getAnswerTextByQuestionIndex from "../get-answer-text-by-question-index";

let count = database.length;
let success = 0;

for (let index = 0; index < database.length; index++) {
  const expectAnswerText = getAnswerTextByQuestionIndex(index);
  const customAnswerText = getAnswer(database[index].question);

  test(`benchmark[${index}]`, () => {
    try {
      expect(customAnswerText).toEqual(expectAnswerText);
      success++;
    } catch (error) {
      throw error;
    }
  });
}

test("quality", () => {
  console.log("=======================");
  console.log("");
  console.log(`QUALITY = ${Math.round((success / count) * 1000) / 10}%`);
});
