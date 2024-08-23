import { NavItemData } from '../../features/Navigation/types.js';
import { LangItemData } from '../../features/Lang/types.js';

export type HeaderData = {
  langs: LangItemData[];
  navigation: NavItemData[];
};
