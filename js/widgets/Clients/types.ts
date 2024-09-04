export type BrandFromAPI = {
  name: string;
  lightSource: string;
  darkSource: string;
};

export type BrandDataFromAPI = {
  brands: BrandFromAPI[];
};
