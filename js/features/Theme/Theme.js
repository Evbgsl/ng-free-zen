import { ThemeLogo } from '../../ui/ThemeLogo/index.js';

/**
 * @function Theme
 * @param {string} className
 * @returns {string} HTML
 */

export const Theme = (className) => `
  <button class="${className}"
    type="button"
    id="theme"
  >
    ${ThemeLogo()}
  </button>
`;
