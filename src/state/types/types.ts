export interface ICountries {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: ICapitalInfo;
  car: ICar;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: ICoatOfArms;
  continents: string[];
  currencies: { [key: string]: ICurrencies };
  demonyms: IDemonyms;
  fifa: string;
  flag: string;
  flags: IFlags;
  gini: IGini;
  idd: IIdd;
  independent: boolean;
  landlocked: boolean;
  languages: { [key: string]: string };
  latlng: number[];
  maps: IMaps;
  name: IName;
  population: number;
  postalCode: IPostalCode;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: ITranslations;
  unMember: boolean;
}

interface ICapitalInfo {
  latlng: number[];
}

interface ICar {
  side: string;
  signs: string[];
}

interface ICoatOfArms {
  png: string;
  svg: string;
}

interface ICurrencies {
  name: string;
  symbol: string;
}

interface IDemonyms {
  eng: TEngFra;
  fra: TEngFra;
}

type TEngFra = {
  eng: string;
  fra: string;
};

interface IFlags {
  alt: string;
  png: string;
  svg: string;
}

interface IGini {
  2017: number;
}

interface IIdd {
  root: string;
  suffixes: string[];
}

interface IMaps {
  googleMaps: string;
  openStreetMaps: string;
}

interface IName {
  common: string;
  nativeName: { [key: string]: TNativeName };
  official: string;
}

type TNativeName = {
  common: string;
  official: string;
};

interface IPostalCode {
  format: string;
  regex: string;
}

interface ITranslations {
  ara: TTranslations;
  bre: TTranslations;
  ces: TTranslations;
  cym: TTranslations;
  deu: TTranslations;
  est: TTranslations;
  fin: TTranslations;
  fra: TTranslations;
  hrv: TTranslations;
  hun: TTranslations;
  ita: TTranslations;
  jpn: TTranslations;
  kor: TTranslations;
  nld: TTranslations;
  per: TTranslations;
  pol: TTranslations;
  por: TTranslations;
  rus: TTranslations;
  slk: TTranslations;
  spa: TTranslations;
  srp: TTranslations;
  swe: TTranslations;
  tur: TTranslations;
  urd: TTranslations;
  zho: TTranslations;
}

type TTranslations = {
  oficial: string;
  common: string;
};
