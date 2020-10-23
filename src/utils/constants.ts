export type WordGramInfo = {
  word: string | null;
  baseForm: string | null;
  partOfSpeech: string | null;
  number: string | null;
  case: string | null;
  gender: string | null;
  time: string | null;
  person: string | null;
  animative: string | null;
};

export enum PartOfSpeech {
  NOUN = "NOUN",
  ADJ_FULL = "ADJ_FULL",
  VERB = "VERB",
  PRONOUN = "PRONOUN",
  PRONOUN_P = "PRONOUN_P",
  PRONOUN_PREDK = "PRONOUN_PREDK",
  NUMERAL = "NUMERAL",
  NUMERAL_P = "NUMERAL_P",
  ADV = "ADV",
  PREDK = "PREDK",
  PREP = "PREP",
  POSL = "POSL",
  CONJ = "CONJ",
  INTERJ = "INTERJ",
  INP = "INP",
  PHRASE = "PHRASE",
  PARTICLE = "PARTICLE",
  ADJ_SHORT = "ADJ_SHORT",
  PARTICIPLE = "PARTICIPLE",
  ADVERB_PARTICIPLE = "ADVERB_PARTICIPLE",
  PARTICIPLE_SHORT = "PARTICIPLE_SHORT",
  INFINITIVE = "INFINITIVE",
}

export const RussianPartOfSpeech: Record<string, PartOfSpeech> = {
  ["С"]: PartOfSpeech.NOUN,
  ["П"]: PartOfSpeech.ADJ_FULL,
  ["Г"]: PartOfSpeech.VERB,
  ["МС"]: PartOfSpeech.PRONOUN,
  ["МС-П"]: PartOfSpeech.PRONOUN_P,
  ["МС-ПРЕДК"]: PartOfSpeech.PRONOUN_PREDK,
  ["ЧИСЛ"]: PartOfSpeech.NUMERAL,
  ["ЧИСЛ-П"]: PartOfSpeech.NUMERAL_P,
  ["Н"]: PartOfSpeech.ADV,
  ["ПРЕДК"]: PartOfSpeech.PREDK,
  ["ПРЕДЛ"]: PartOfSpeech.PREP,
  ["ПОСЛ"]: PartOfSpeech.POSL,
  ["СОЮЗ"]: PartOfSpeech.CONJ,
  ["МЕЖД"]: PartOfSpeech.INTERJ,
  ["ВВОДН"]: PartOfSpeech.INP,
  ["ФРАЗ"]: PartOfSpeech.PHRASE,
  ["ЧАСТ"]: PartOfSpeech.PARTICLE,
  ["КР_ПРИЛ"]: PartOfSpeech.ADJ_SHORT,
  ["ПРИЧАСТИЕ"]: PartOfSpeech.PARTICIPLE,
  ["ДЕЕПРИЧАСТИЕ"]: PartOfSpeech.ADVERB_PARTICIPLE,
  ["КР_ПРИЧАСТИЕ"]: PartOfSpeech.PARTICIPLE_SHORT,
  ["ИНФИНИТИВ"]: PartOfSpeech.INFINITIVE,
};

export enum Number {
  PLURAL = "PLURAL", // Единственное
  SINGULAR = "SINGULAR", // Множественное
}

export enum Case {
  NOMINATIV = "NOMINATIV", // Именительный
  GENITIV = "GENITIV", // Родительный
  DATIV = "DATIV", // Дательный
  ACCUSATIV = "ACCUSATIV", // Винительный
  INSTRUMENTALIS = "INSTRUMENTALIS", // Творительный
  LOCATIV = "LOCATIV", // Предложный
  VOCATIV = "VOCATIV", // Звательный
}

export enum Gender {
  MASCULINUM = "MASCULINUM", // Мужской
  FEMINUM = "FEMINUM", // Женский
  NEUTRUM = "NEUTRUM", // Средний
}

export enum Time {
  PRESENT_TENSE = "PRESENT_TENSE", // Настоящее
  FUTURE_TENSE = "FUTURE_TENSE", // Будущее
  PAST_TENSE = "PAST_TENSE", // Прошлое
}

export enum Person {
  FIRST_PERSON = "FIRST_PERSON", // 1 лицо
  SECOND_PERSON = "SECOND_PERSON", // 2 лицо
  THIRD_PERSON = "THIRD_PERSON", // 3 лицо
}

export enum Animative {
  ANIMATIVE = "ANIMATIVE", // Одушевленное
  NON_ANIMATIVE = "NON_ANIMATIVE", // Неодушевленное
}

export const Grammem: Record<string, any> = {
  PLURAL: Number.PLURAL,
  SINGULAR: Number.SINGULAR,

  NOMINATIV: Case.NOMINATIV,
  GENITIV: Case.GENITIV,
  DATIV: Case.DATIV,
  ACCUSATIV: Case.ACCUSATIV,
  INSTRUMENTALIS: Case.INSTRUMENTALIS,
  LOCATIV: Case.LOCATIV,
  VOCATIV: Case.VOCATIV,

  MASCULINUM: Gender.MASCULINUM,
  FEMINUM: Gender.FEMINUM,
  NEUTRUM: Gender.NEUTRUM,

  MASC_FEM: "MASC_FEM",

  PRESENT_TENSE: Time.PRESENT_TENSE,
  FUTURE_TENSE: Time.FUTURE_TENSE,
  PAST_TENSE: Time.PAST_TENSE,

  FIRST_PERSON: Person.FIRST_PERSON,
  SECOND_PERSON: Person.SECOND_PERSON,
  THIRD_PERSON: Person.THIRD_PERSON,

  IMPERATIVE: "IMPERATIVE",

  ANIMATIVE: Animative.ANIMATIVE,
  NON_ANIMATIVE: Animative.NON_ANIMATIVE,

  COMPARATIVE: "COMPARATIVE",
  PERFECTIVE: "PERFECTIVE",
  NON_PERFECTIVE: "NON_PERFECTIVE",
  NON_TRANSITIVE: "NON_TRANSITIVE",
  TRANSITIVE: "TRANSITIVE",
  ACTIVE_VOICE: "ACTIVE_VOICE",
  PASSIVE_VOICE: "PASSIVE_VOICE",
  INDECLINABLE: "INDECLINABLE",
  INITIALISM: "INITIALISM",
  PATRONYMIC: "PATRONYMIC",
  TOPONYM: "TOPONYM",
  ORGANISATION: "ORGANISATION",
  QUALITATIVE: "QUALITATIVE",
  DE_FACTO_SING_TANTUM: "DE_FACTO_SING_TANTUM",
  INTERROGATIVE: "INTERROGATIVE",
  DEMONSTRATIVE: "DEMONSTRATIVE",
  NAME: "NAME",
  SUR_NAME: "SUR_NAME",
  IMPERSONAL: "IMPERSONAL",
  SLANG: "SLANG",
  MISPRINT: "MISPRINT",
  COLLOQUIAL: "COLLOQUIAL",
  POSSESSIVE: "POSSESSIVE",
  ARCHAISM: "ARCHAISM",
  SECOND_CASE: "SECOND_CASE",
  POETRY: "POETRY",
  PROFESSION: "PROFESSION",
  SUPERLATIVE: "SUPERLATIVE",
  POSITIVE: "POSITIVE",
  SHORT: "SHORT",
  INFO: "INFO",
  DEEPR: "DEEPR",
  PR: "PR",
};

export const RussianGrammem: Record<string, any> = {
  ["МН"]: Grammem.PLURAL,
  ["ЕД"]: Grammem.SINGULAR,

  ["ИМ"]: Grammem.NOMINATIV,
  ["РД"]: Grammem.GENITIV,
  ["ДТ"]: Grammem.DATIV,
  ["ВН"]: Grammem.ACCUSATIV,
  ["ТВ"]: Grammem.INSTRUMENTALIS,
  ["ПР"]: Grammem.LOCATIV,

  ["ЗВ"]: Grammem.VOCATIV,

  ["МР"]: Grammem.MASCULINUM,
  ["ЖР"]: Grammem.FEMINUM,
  ["СР"]: Grammem.NEUTRUM,
  ["МР-ЖР"]: Grammem.MASC_FEM,
  ["НСТ"]: Grammem.PRESENT_TENSE,
  ["БУД"]: Grammem.FUTURE_TENSE,
  ["ПРШ"]: Grammem.PAST_TENSE,
  ["1Л"]: Grammem.FIRST_PERSON,
  ["2Л"]: Grammem.SECOND_PERSON,
  ["3Л"]: Grammem.THIRD_PERSON,
  ["ПВЛ"]: Grammem.IMPERATIVE,
  ["ОД"]: Grammem.ANIMATIVE,
  ["НО"]: Grammem.NON_ANIMATIVE,
  ["СРАВН"]: Grammem.COMPARATIVE,
  ["СВ"]: Grammem.PERFECTIVE,
  ["НС"]: Grammem.NON_PERFECTIVE,
  ["НП"]: Grammem.NON_TRANSITIVE,
  ["ПЕ"]: Grammem.TRANSITIVE,
  ["ДСТ"]: Grammem.ACTIVE_VOICE,
  ["СТР"]: Grammem.PASSIVE_VOICE,
  ["0"]: Grammem.INDECLINABLE,
  ["АББР"]: Grammem.INITIALISM,
  ["ОТЧ"]: Grammem.PATRONYMIC,
  ["ЛОК"]: Grammem.TOPONYM,
  ["ОРГ"]: Grammem.ORGANISATION,
  ["КАЧ"]: Grammem.QUALITATIVE,
  ["ДФСТ"]: Grammem.DE_FACTO_SING_TANTUM,
  ["ВОПР"]: Grammem.INTERROGATIVE,
  ["УКАЗАТ"]: Grammem.DEMONSTRATIVE,
  ["ИМЯ"]: Grammem.NAME,
  ["ФАМ"]: Grammem.SUR_NAME,
  ["БЕЗЛ"]: Grammem.IMPERSONAL,
  ["ЖАРГ"]: Grammem.SLANG,
  ["ОПЧ"]: Grammem.MISPRINT,
  ["РАЗГ"]: Grammem.COLLOQUIAL,
  ["ПРИТЯЖ"]: Grammem.POSSESSIVE,
  ["АРХ"]: Grammem.ARCHAISM,
  ["2"]: Grammem.SECOND_CASE,
  ["ПОЭТ"]: Grammem.POETRY,
  ["ПРОФ"]: Grammem.PROFESSION,
  ["ПРЕВ"]: Grammem.SUPERLATIVE,
  ["ПОЛОЖ"]: Grammem.POSITIVE,
  ["КР"]: Grammem.SHORT,
  ["ИНФ"]: Grammem.INFO,
  ["ДПР"]: Grammem.DEEPR,
  ["ПРЧ"]: Grammem.PR,
};
