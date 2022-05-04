export interface ICapitalInfo {
  latlng?: number[];
}

export interface IPostalCode {
  format: string;
  regex?: string;
}

export interface ICoatOfArms {
  png?: string;
  svg?: string;
}

export interface ICar {
  signs?: string[];
  side: string;
}

export interface IMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface IEng {
  f: string;
  m: string;
}

export interface IDemonyms {
  eng: IEng;
  fra?: IEng;
}

export interface IIdd {
  root?: string;
  suffixes?: string[];
}

export interface ICurrency {
  name: string;
  symbol: string;
}

export interface ITranslation {
  official: string;
  common: string;
}

export interface IName {
  common: string;
  official: string;
  nativeName?: { [key: string]: ITranslation };
}

export interface ICountryResponse {
  name: IName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: ICurrency };
  idd: IIdd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: ITranslation };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: IDemonyms;
  flag: string;
  maps: IMaps;
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: ICar;
  timezones: string[];
  continents: string[];
  flags: ICoatOfArms;
  coatOfArms: ICoatOfArms;
  startOfWeek: string;
  capitalInfo: ICapitalInfo;
  postalCode: IPostalCode;
}

export interface ICountriesState {
  countries: ICountryResponse[];
  country: ICountryResponse;
}
