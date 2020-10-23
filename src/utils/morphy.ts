import Morphy from "phpmorphy";

const morphy = new Morphy("ru", {
  nojo: true,
  storage: Morphy.STORAGE_MEM,
  predict_by_suffix: true,
  predict_by_db: true,
  graminfo_as_text: true,
  use_ancodes_cache: false,
  resolve_ancodes: Morphy.RESOLVE_ANCODES_AS_TEXT,
});

export default morphy;
