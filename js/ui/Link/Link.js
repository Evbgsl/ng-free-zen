import { IconApple } from '../IconApple/index.js';
import { IconGoogle } from '../IconGoogle/index.js';

/**
 * @typedef {import('./types').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} data
 * @param {className} data
 * @returns {string} HTML
 */

export const Link = (data, className) => `
  <a
    class="${className}"
    href="${data.url}">
    ${data.name === 'apple' ? IconApple() : ''}
    ${data.name === 'google' ? IconGoogle() : ''}
  </a>
`;
