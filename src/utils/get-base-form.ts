import morphy from "./morphy";

const getBaseForm = (word: string): string | null => {
  const forms = morphy.getBaseForm(word);
  if (forms == null) {
    return null;
  }
  const baseForm = forms[0];
  if (baseForm != null && baseForm.constructor === String) {
    return baseForm as string;
  }
  return null;
};

export default getBaseForm;
