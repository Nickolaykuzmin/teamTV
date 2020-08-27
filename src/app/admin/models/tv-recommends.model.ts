interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
}

interface Externals {
  tvrage?: any;
  thetvdb: number;
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Self {
  href: string;
}

interface Previousepisode {
  href: string;
}

interface Links {
  self: Self;
  previousepisode: Previousepisode;
}


export interface TvRecommendsModel {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}


