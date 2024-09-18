/**********************************************
  Common types
**********************************************/

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

/**********************************************
  Header types
**********************************************/

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

/**********************************************
  Download types
**********************************************/

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};

/**********************************************
  Warranty types
**********************************************/

export type WarrantyData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

/**********************************************
  Care types
**********************************************/

export type CareData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

/**********************************************
  Cashback types
**********************************************/

export type CashbackData = {
  title: TitleData;
  texts: string[];
  buttonText: string;
};

/**********************************************
  Clients types
**********************************************/

export type Brand = {
  name: string;
  lightSource: string;
  darkSource: string;
};

export type ClientsData  = {
  brands: Brand[];
};

/**********************************************
  Footer types
**********************************************/

export type LinkContent = {
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

export type DevContent = {
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

/**********************************************
  AppData
**********************************************/

export type AppData = {
  primaryInfo: HeaderData;
  download: DownloadData;
  warranty: WarrantyData;
  care: CareData;
  cashback: CashbackData;
  clients: ClientsData;
  secondaryInfo: FooterData;
};

/*********************************************/
