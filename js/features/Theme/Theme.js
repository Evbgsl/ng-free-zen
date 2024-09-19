import { IconMoon } from '../../ui/IconMoon/index.js';
import { IconSun } from '../../ui/IconSun/index.js';

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
    ${
      localStorage.getItem('theme') === 'light'
        ? IconMoon()
        : IconSun()
    }
  </button>
`;
