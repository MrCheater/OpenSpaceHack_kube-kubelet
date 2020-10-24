import { replacement } from "./cache";

const replaceSynonyms = (text: string): string => {
  let result = "    " + text.toUpperCase().replace(/ /, "    ") + "    ";

  for (const [prev, next] of replacement) {
    for (;;) {
      const nextResult = result.replace(` ${prev} `, ` ${next} `);
      if (nextResult === result) {
        break;
      }
      result = nextResult;
    }
  }

  return result.replace(/\s+/gi, " ").trim();
};

export default replaceSynonyms;
