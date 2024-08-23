import { IconApple } from '../IconApple/IconApple.js';
import { IconGoogle } from '../IconGoogle/IconGoogle.js';

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


