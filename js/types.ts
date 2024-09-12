// Common types
export type LinkData = {
  name: string;
  url: string;
};

export type TitleData = {
  content: string;
  priority: number;
};

export type ImageData = {
  source: string;
  description: string;
};

// Sections types
export type LangItemData = {
  name: string;
  key: string;
};

export type NavItemData = {
  name: string;
  key: string;
};

export type HeaderData = {
  langs: LangItemData[];
  navigation: NavItemData[];
};

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};

export type WarrantyData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

export type CareData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

export type CashbackData = {
  title: TitleData;
  texts: string[];
  buttonText: string;
};

export type BrandFromAPI = {
  name: string;
  lightSource: string;
  darkSource: string;
};

export type ClientsDataFromAPI  = {
  brands: BrandFromAPI[];
};

type LinkContent = {
  type: string;
  data: string;
};

export type FooterLinkData = {
  url: string;
  content: LinkContent;
};

export type CategoriesData = {
  name: string;
  links: FooterLinkData[];
};

type DevContent = {
  type: string;
  data: string;
  description: string;
};

export type DeveloperData = {
  url: string;
  content: DevContent;
};

export type FooterData = {
  categories: CategoriesData[];
  texts: string[];
  developer: DeveloperData;
};

// AppData
export type AppData = {
  primaryInfo: HeaderData;
  download: DownloadData;
  warranty: WarrantyData;
  care: CareData;
  cashback: CashbackData;
  clients: ClientsDataFromAPI
  secondaryInfo: FooterData
};
