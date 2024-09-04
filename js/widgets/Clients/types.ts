export type BrandFromAPI = {
  name: string;
  lightSource: string;
  darkSource: string;
};

export type ClientsDataFromAPI  = {
  brands: BrandFromAPI[];
};
