import { IconLinkedIn } from '../../ui/IconLinkedIn/index.js';

/**
 * @typedef {import('./types').LinkDataFooter} LinkDataFooter
 */

/**
 * @function Link
 * @param {LinkDataFooter} data
 * @returns {string} HTML
 */

export const LinkFooter = (data) => `
  ${data.content.type === 'text'
    ? `<a href="${data.url}">${data.content.data}</a>`
    : ''}
  ${data.content.type === 'image'
    ? `<a href="${data.url}">${IconLinkedIn()}</a>`
    : ''}
`;
