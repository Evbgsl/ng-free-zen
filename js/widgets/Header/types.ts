import { LangItemData } from '../../features/Lang/types.js';
import { NavItemData } from '../../features/Navigation/types.js';

export type HeaderData = {
  langs: LangItemData[];
  navigation: NavItemData[];
};
