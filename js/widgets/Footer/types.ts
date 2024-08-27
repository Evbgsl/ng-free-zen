import { CategoriesData } from '../../ui/Column/types';
import { DeveloperData } from '../../ui/FooterDev/types';

export type FooterData = {
  categories: CategoriesData[];
  texts: string[];
  developer: DeveloperData;
};
