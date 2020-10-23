import natural from "natural";

const tokenize = (text: string): Array<string> => {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer
    .tokenize(text)
    .filter((word) => word != null && word !== "");

  return tokens;
};

export default tokenize;
