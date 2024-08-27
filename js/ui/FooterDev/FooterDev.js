import { FooterDevLogo } from '../../ui/FooterDevLogo/index.js';

/**
 * @typedef {import ('./types').DeveloperData} DeveloperData
 */

/**
 * @function FooterDev
 * @param {DeveloperData} data
 * @returns {string} HTML
 */

export const FooterDev = (data) => `
  <a class="footer__dev" href="${data.url}">
    ${FooterDevLogo()}
  </a>
`;

