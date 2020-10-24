import tokenize from "./tokenize";
import getWordGramInfoAlternatives from "./get-word-gram-info-alternatives";
import { WordGramInfo } from "./constants";

const transpose = (matrix) => {
  const rows = matrix == null ? 0 : matrix.length;
  const cols = matrix[0] == null ? 0 : matrix[0].length;

  let grid: any = [];
  for (let col = 0; col < cols; col++) {
    grid[col] = [];
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      grid[col][row] = matrix[row][col];
    }
  }
  return grid;
};

const getTextGramInfoAlternatives = (
  text: string
): Array<Array<WordGramInfo>> => {
  const tokens = tokenize(text);

  const wordsGramInfo = (tokens
    .map(getWordGramInfoAlternatives)
    .filter((token) => token != null) as unknown) as Array<Array<WordGramInfo>>;

  const countWordsGramInfo = wordsGramInfo.map((gramInfo) =>
    gramInfo == null ? 0 : gramInfo.length
  );

  const countTextsGramInfo = countWordsGramInfo.reduce(
    (acc, val) => acc * val,
    1
  );

  const result: any = [];

  let factor = countTextsGramInfo;
  for (let i = wordsGramInfo.length - 1; i >= 0; i--) {
    result[i] = [];
    factor /= countWordsGramInfo[i];
    for (let j = 0; j < countTextsGramInfo / factor; j++) {
      for (let k = 0; k < factor; k++) {
        result[i].push(wordsGramInfo[i][j % countWordsGramInfo[i]]);
      }
    }
  }

  return transpose(result);
};

export default getTextGramInfoAlternatives;
